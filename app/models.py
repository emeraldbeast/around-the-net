from sqlalchemy import Table, Column, Integer, String, Boolean, Enum, ForeignKey
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import text
import enum
from .database import Base

player_submatch = Table(
    "player_submatch",
    Base.metadata,
    Column("player_id", ForeignKey("players.id"), primary_key=True),
    Column("submatch_id", ForeignKey("submatches.id"), primary_key=True),
)

class SubMatchType(str, enum.Enum):
    singles = "singles"
    doubles = "doubles"

class RoundType(str, enum.Enum):
    group = "group"
    semifinal = "semifinal"
    final = "final"

# class Post(Base):
#     __tablename__ = "posts"

#     id = Column(Integer, primary_key=True, nullable=False)
#     title = Column(String, nullable=False)
#     content = Column(String, nullable=False)
#     published = Column(Boolean, server_default="TRUE", nullable=False)
#     created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))
#     owner_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False) # reference table name
#     owner = relationship("User") # reference the class

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, nullable=False)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    role = Column(String, default="user")  # "admin" and "referee"

class Player(Base):
    __tablename__ = "players"
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False, unique=True)
    intro = Column(String, nullable=False)
    team_id = Column(Integer, ForeignKey("teams.id"))
    team = relationship("Team", back_populates="players")
    submatch = relationship("SubMatch", secondary=player_submatch, back_populates="players")

class Team(Base):
    __tablename__ = "teams"
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String, nullable=False, unique=True)
    group_id = Column(Integer, nullable=False)
    players = relationship("Player", back_populates="team")
    stats = relationship("TeamStats", back_populates="team", uselist=False)

class TeamStats(Base):
    __tablename__ = "team_stats"
    id = Column(Integer, primary_key=True)
    team_id = Column(Integer, ForeignKey("teams.id"))
    wins = Column(Integer, default=0)
    losses = Column(Integer, default=0)
    score_diff = Column(Integer, default=0)
    team = relationship("Team", back_populates="stats")

class Match(Base):
    __tablename__ = "matches"
    id = Column(Integer, primary_key=True)
    round = Column(Enum(RoundType))
    team1_id = Column(Integer, ForeignKey("teams.id"))
    team2_id = Column(Integer, ForeignKey("teams.id"))
    team1_score = Column(Integer, default=0)
    team2_score = Column(Integer, default=0)
    winner_id = Column(Integer, ForeignKey("teams.id"), nullable=True)

    team1 = relationship("Team", foreign_keys=[team1_id])
    team2 = relationship("Team", foreign_keys=[team2_id])
    winner = relationship("Team", foreign_keys=[winner_id])
    submatches = relationship("SubMatch", back_populates="match")

class SubMatch(Base):
    __tablename__ = "submatches"
    id = Column(Integer, primary_key=True)
    match_id = Column(Integer, ForeignKey("matches.id"))
    game_number = Column(Integer)  # 1 to 5
    type = Column(Enum(SubMatchType))
    team1_score = Column(Integer, default=0)
    team2_score = Column(Integer, default=0)
    winner_id = Column(Integer, ForeignKey("teams.id"), nullable=True)

    match = relationship("Match", back_populates="submatches")
    players = relationship("Player", secondary=player_submatch, back_populates="submatch")

class Set(Base):
    __tablename__ = "setscore"
    id = Column(Integer, primary_key=True)
    submatch_id = Column(Integer, ForeignKey("submatches.id"))
    set_number = Column(Integer, nullable=False)
    team1_score = Column(Integer, default=0)
    team2_score = Column(Integer, default=0)
    winner_id = Column(Integer, ForeignKey("teams.id"), nullable=True)
    submatch = relationship("SubMatch", back_populates="sets")