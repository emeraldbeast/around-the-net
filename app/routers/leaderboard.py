from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, HTTPException, status, Body, APIRouter
from fastapi.responses import HTMLResponse, JSONResponse
from .. import models, schemas, oauth2
from typing import List, Dict, Optional
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from ..database import get_db
from datetime import datetime
import asyncio
import enum

class SubMatchType(str, enum.Enum):
    singles = "singles"
    doubles = "doubles"

class RoundType(str, enum.Enum):
    group = "group"
    semifinal = "semifinal"
    final = "final"

router = APIRouter(
    prefix="/leaderboard",
    tags=['Leaderboard']
)


@router.post("/teams/", response_model=schemas.TeamOut)
def create_team(team: schemas.TeamCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    try:
        db_team = models.Team(name=team.name, group_id=team.group_id)
        db.add(db_team)
        db.refresh(db_team)
        stats = models.TeamStats(team_id=db_team.id)
        db.add(stats)
        db.commit()
    except:
        db.rollback()
        raise
    return db_team


@router.get("/teams/show", response_model=List[schemas.TeamOut])
def show_team(db: Session = Depends(get_db)):
    teams = db.query(models.Team).all()
    return teams


@router.post("/players/", response_model=schemas.PlayerOut)
def create_player(player: schemas.PlayerCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    db_player = models.Player(name=player.name, intro=player.intro, team_id=player.team_id)
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    return db_player


@router.get("/players/show", response_model=List[schemas.PlayerOut])
def show_player(db: Session = Depends(get_db)):
    players = db.query(models.Player).all()
    return players


@router.get("/matches/active")
def get_active_matches(db: Session = Depends(get_db)):
    return db.query(models.Match).filter(models.Match.status == "in_progress").all()


@router.get("/matches/{match_id}/submatches/active")
def get_active_submatches(match_id: int, db: Session = Depends(get_db)):
    return (
        db.query(models.SubMatch)
        .filter(
            models.SubMatch.match_id == match_id,
            models.SubMatch.status == "in_progress"
        )
        .all()
    )


@router.post("/matches/", response_model=schemas.MatchOut)
def create_match(match: schemas.MatchCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    db_match = models.Match(team1_id=match.team1_id, team2_id=match.team2_id, round=match.round)
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match


@router.post("/submatches/", response_model=schemas.SubMatchOut)
def create_submatch(submatch: schemas.SubMatchCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    match = db.query(models.Match).filter(models.Match.id == submatch.match_id).first()
    if not match:
        raise HTTPException(404, "Parent match not found")

    if submatch.type == models.SubMatchType.singles:
        if len(submatch.team1_player_ids) != 1 or len(submatch.team2_player_ids) != 1:
            raise HTTPException(400, "Singles must have 1 player per team")
    elif submatch.type == models.SubMatchType.doubles:
        if len(submatch.team1_player_ids) != 2 or len(submatch.team2_player_ids) != 2:
            raise HTTPException(400, "Doubles must have 2 players per team")

    new_submatch = models.SubMatch(
        match_id=submatch.match_id,
        game_number=submatch.game_number,
        type=submatch.type,
    )

    team1_players = db.query(models.Player).filter(models.Player.id.in_(submatch.team1_player_ids)).all()
    team2_players = db.query(models.Player).filter(models.Player.id.in_(submatch.team2_player_ids)).all()
    new_submatch.team1_players = team1_players
    new_submatch.team2_players = team2_players

    db.add(new_submatch)
    db.commit()
    db.refresh(new_submatch)

    return schemas.SubMatchOut(
        id=new_submatch.id,
        match_id=new_submatch.match_id,
        game_number=new_submatch.game_number,
        type=new_submatch.type,
        team1_players=[p.id for p in new_submatch.team1_players],
        team2_players=[p.id for p in new_submatch.team2_players],
        team1_score=new_submatch.team1_score,
        team2_score=new_submatch.team2_score,
    )

@router.post("/sets", response_model=schemas.SetOut)
def create_set(set: schemas.SetCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
    submatch = db.query(models.SubMatch).filter(models.SubMatch.id == set.submatch_id).first()
    if not submatch:
        raise HTTPException(404, "Parent Submatch not found")
    
    if submatch.status != "in_progress":
        raise HTTPException(400, "Submatch already completed")
    # add case to not accept same sets

    try: 
        winner_score = max(set.team1_score, set.team2_score)
        winner_id = 0
        loser_id = 0
        if set.team1_score == winner_score:
            winner_id = set.team1_id
            loser_id = set.team2_id
        else:
            winner_id = set.team2_id
            loser_id = set.team1_id

        num_sets = db.query(func.count(models.Set.id)).filter(models.Set.submatch_id == set.submatch_id).scalar()
        set_number = num_sets + 1
        match_type = submatch.match.round
        submatch_type = submatch.type

        new_set = models.Set(
            submatch_id=set.submatch_id,
            set_number=set_number,
            team1_score=set.team1_score,
            team2_score=set.team2_score,
            winner_id=winner_id,
            submitted_by=current_user.id
        )

        db.add(new_set)

        won_by_winner = db.query(func.count(models.Set.id)).filter(
            models.Set.submatch_id == set.submatch_id,
            models.Set.winner_id == winner_id
            ).scalar()

        satisfy = 0
        if won_by_winner == 2 and match_type==RoundType.group.value:
            satisfy = 1
        elif won_by_winner == 3:
            satisfy = 1

        if satisfy == 1:
            submatch.winner_team_id = winner_id
            submatch.status = "completed"

            match = submatch.match
            team1_id = match.team1_id
            team2_id = match.team2_id
            team1_players = [p for p in submatch.players if p.team_id == team1_id]
            team2_players = [p for p in submatch.players if p.team_id == team2_id]
            winner_stats = db.query(models.TeamStats).filter(models.TeamStats.team_id == winner_id).first()
            loser_stats = db.query(models.TeamStats).filter(models.TeamStats.team_id == loser_id).first()
            score_diff = abs(set.team1_score-set.team2_score)
            match_score = 1

            if submatch_type==SubMatchType.doubles.value:
                match_score *= 2
                score_diff *= 2

            if winner_id == match.team1_id:
                match.team1_score += match_score

                for player in team1_players:
                    ps = player.stats
                    if ps:
                        ps.wins += 1
                        ps.score_diff += score_diff
                    else:
                        ps = models.PlayerStats(player_id=player.id, wins=1, score_diff=score_diff)
                        db.add(ps)
                        
                for player in team2_players:
                    ps = player.stats
                    if ps:
                        ps.losses += 1
                        ps.score_diff -= score_diff
                    else:
                        ps = models.PlayerStats(player_id=player.id, losses=1, score_diff=-score_diff)
                        db.add(ps)
            else:
                match.team2_score += match_score

                for player in team2_players:
                    ps = player.stats
                    if ps:
                        ps.wins += 1
                        ps.score_diff += score_diff
                    else:
                        ps = models.PlayerStats(player_id=player.id, wins=1, score_diff=score_diff)
                        db.add(ps)

                for player in team1_players:
                    ps = player.stats
                    if ps:
                        ps.losses += 1
                    else:
                        ps = models.PlayerStats(player_id=player.id, losses=1, score_diff=-score_diff)
                        db.add(ps)

            winner_stats.score_diff += score_diff
            loser_stats.score_diff -= score_diff

            if match.team1_score == 4 or match.team2_score == 4:
                    winner_stats.wins += 1
                    loser_stats.losses += 1

        db.commit()
    except:
        db.rollback()
        raise
        
    return new_set

@router.get("/groups/{group_id}/standings")
def get_group_standings(group_id: int, db: Session = Depends(get_db)):
    teams = (
        db.query(models.Team)
        .filter(models.Team.group_id == group_id)
        .join(models.TeamStats)
        .order_by(desc(models.TeamStats.wins), desc(models.TeamStats.score_diff))
        .all()
    )
    if not teams:
        raise HTTPException(404, f"No teams found in group {group_id}")

    standings = [
        {"team": t.name, "wins": t.stats.wins, "losses": t.stats.losses, "score_diff": t.stats.score_diff}
        for t in teams
    ]
    return JSONResponse(content={"group": group_id, "standings": standings})