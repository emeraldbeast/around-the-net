"""add content column to posts table

Revision ID: 50e81dfe1e88
Revises: 598d578e0a9c
Create Date: 2025-08-25 19:03:35.802158

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '50e81dfe1e88'
down_revision: Union[str, Sequence[str], None] = '598d578e0a9c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.add_column("posts", sa.Column("content", sa.String(), nullable=False))
    pass


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_column("posts", "content")
    pass
