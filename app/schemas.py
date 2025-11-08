from pydantic import BaseModel, EmailStr, conint
from typing import List, Optional
from datetime import datetime
import enum


class RoundType(str, enum.Enum):
    group = "group"
    semifinal = "semifinal"
    final = "final"

class SubMatchType(str, enum.Enum):
    singles = "singles"
    doubles = "doubles"

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None

class PlayerBase(BaseModel):
    name: str
    intro: str
    team_id: int

class PlayerCreate(PlayerBase):
    pass

class PlayerOut(BaseModel):
    id: int
    name: str
    team_id: int
    class Config:
        orm_mode = True

class TeamBase(BaseModel):
    name: str
    group_id: int

class TeamCreate(TeamBase):
    pass

class TeamOut(BaseModel):
    id: int
    name: str
    group_id: int
    class Config:
        orm_mode = True


class SubMatchCreate(BaseModel):
    match_id: int
    game_number: int
    type: SubMatchType
    team1_player_ids: List[int]
    team2_player_ids: List[int]

class SubMatchOut(BaseModel):
    id: int
    match_id: int
    game_number: int
    type: SubMatchType
    team1_players: List[int]
    team2_players: List[int]
    team1_score: int
    team2_score: int
    class Config:
        orm_mode = True

class MatchCreate(BaseModel):
    team1_id: int
    team2_id: int
    round: RoundType = RoundType.group

class MatchOut(BaseModel):
    id: int
    team1_id: int
    team2_id: int
    winner_id: Optional[int]
    round: RoundType
    class Config:
        orm_mode = True

class SetCreate(BaseModel):
    team1_id: int
    team2_id: int
    submatch_id: int
    team1_score: int
    team2_score: int

class SetOut(BaseModel):
    submatch_id: int
    type: SubMatchType
    team1_score: int
    team2_score: int
    team1_players: List[int]
    team2_players: List[int]
    class Config:
        orm_mode = True
