"""empty message

Revision ID: 931614c3fb15
Revises: 75baa9dcee00
Create Date: 2024-06-02 14:24:12.262845

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '931614c3fb15'
down_revision = '75baa9dcee00'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('payment', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('course_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('manager_id',
               existing_type=sa.INTEGER(),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('payment', schema=None) as batch_op:
        batch_op.alter_column('manager_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.alter_column('course_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)

    # ### end Alembic commands ###
