"""empty message

Revision ID: ebec6ad61698
Revises: f681efd59338
Create Date: 2022-08-06 19:49:02.177330

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ebec6ad61698'
down_revision = 'f681efd59338'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bebida',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_bebida', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion_bebida')
    )
    op.create_table('direccion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_calle', sa.String(length=120), nullable=False),
    sa.Column('numero_calle', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('numero_calle')
    )
    op.create_table('empresa',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_empresa', sa.String(length=80), nullable=False),
    sa.Column('cantidad_trabajadores', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre_empresa')
    )
    op.create_table('ensalada',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_ensalada', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion_ensalada')
    )
    op.create_table('postre',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_postre', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion_postre')
    )
    op.create_table('principal',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('descripcion_principal', sa.String(length=150), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('descripcion_principal')
    )
    op.create_table('casino',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('principal_id', sa.Integer(), nullable=False),
    sa.Column('ensalada_id', sa.Integer(), nullable=False),
    sa.Column('postre_id', sa.Integer(), nullable=False),
    sa.Column('bebida_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['bebida_id'], ['bebida.id'], ),
    sa.ForeignKeyConstraint(['ensalada_id'], ['ensalada.id'], ),
    sa.ForeignKeyConstraint(['postre_id'], ['postre.id'], ),
    sa.ForeignKeyConstraint(['principal_id'], ['principal.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_usuario', sa.String(length=80), nullable=False),
    sa.Column('apellido_usuario', sa.String(length=80), nullable=False),
    sa.Column('telefono', sa.Integer(), nullable=False),
    sa.Column('skype', sa.String(length=80), nullable=True),
    sa.Column('facebook', sa.String(length=80), nullable=True),
    sa.Column('twitter', sa.String(length=80), nullable=True),
    sa.Column('instagram', sa.String(length=80), nullable=True),
    sa.Column('linkedin', sa.String(length=80), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('empresa_id', sa.Integer(), nullable=False),
    sa.Column('direccion_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['direccion_id'], ['direccion.id'], ),
    sa.ForeignKeyConstraint(['empresa_id'], ['empresa.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('facebook'),
    sa.UniqueConstraint('instagram'),
    sa.UniqueConstraint('linkedin'),
    sa.UniqueConstraint('skype'),
    sa.UniqueConstraint('telefono'),
    sa.UniqueConstraint('twitter')
    )
    op.create_table('colacion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('casino_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['casino_id'], ['casino.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reporte',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('contenido', sa.String(length=120), nullable=False),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['usuario_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pedidos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('colacion_id', sa.Integer(), nullable=False),
    sa.Column('usuario_id', sa.Integer(), nullable=False),
    sa.Column('entregado', sa.Boolean(), server_default='false', nullable=True),
    sa.ForeignKeyConstraint(['colacion_id'], ['colacion.id'], ),
    sa.ForeignKeyConstraint(['usuario_id'], ['usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('email', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('password', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='user_pkey'),
    sa.UniqueConstraint('email', name='user_email_key')
    )
    op.drop_table('pedidos')
    op.drop_table('reporte')
    op.drop_table('colacion')
    op.drop_table('usuario')
    op.drop_table('casino')
    op.drop_table('principal')
    op.drop_table('postre')
    op.drop_table('ensalada')
    op.drop_table('empresa')
    op.drop_table('direccion')
    op.drop_table('bebida')
    # ### end Alembic commands ###
