"""empty message

Revision ID: da8fc950a551
Revises: 97c1c4cad36a
Create Date: 2022-06-15 11:00:10.224490

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'da8fc950a551'
down_revision = '97c1c4cad36a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('empresas', sa.Column('bio', sa.String(length=360), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('empresas', 'bio')
    # ### end Alembic commands ###
