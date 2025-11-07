from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Depends, HTTPException, status, Body, APIRouter
from fastapi.responses import HTMLResponse
from .. import models, schemas, oauth2
from typing import List, Dict, Optional
from sqlalchemy.orm import Session
from sqlalchemy import func
from ..database import get_db
from datetime import datetime
import asyncio

router = APIRouter(
    prefix="/leaderboard",
    tags=['Leaderboard']
)

@router.post("/teams/", response_model=schemas.TeamOut)
def create_team(team: schemas.TeamCreate, db: Session = Depends(get_db)):
    db_team = models.Team(name=team.name, group_id=team.group_id)
    db.add(db_team)
    db.commit()
    db.refresh(db_team)
    stats = models.TeamStats(team_id=db_team.id)
    db.add(stats)
    db.commit()
    return db_team

@router.post("/players/", response_model=schemas.PlayerOut)
def create_player(player: schemas.PlayerCreate, db: Session = Depends(get_db)):
    db_player = models.Player(name=player.name, intro=player.intro, team_id=player.team_id)
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    return db_player


@router.post("/matches/", response_model=schemas.MatchOut)
def create_match(match: schemas.MatchCreate, db: Session = Depends(get_db)):
    db_match = models.Match(team1_id=match.team1_id, team2_id=match.team2_id, round=match.round)
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match


@router.post("/submatches/", response_model=schemas.SubMatchOut)
def create_submatch(submatch: schemas.SubMatchCreate, db: Session = Depends(get_db)):
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