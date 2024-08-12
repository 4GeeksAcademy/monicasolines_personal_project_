from flask_sqlalchemy import SQLAlchemy
from enum import Enum


db = SQLAlchemy()

class Postulados(db.Model):
    __tablename__="postulados"
    user_id= db.Column (db.Integer, db.ForeignKey("user.id"), primary_key=True)
    oferta_id = db.Column (db.Integer, db.ForeignKey("ofertas.id"), primary_key=True)
    

    def __repr__(self):
        return f'<Postulados {self.id}>'

    def serialize(self):
        return {
            "user_id": self.user_id,
            "oferta_id": self.oferta_id

        }

class User(db.Model):
    __tablename__="user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column (db.String (20), unique=True, nullable=False)
    username = db.Column (db.String(50), unique=True, nullable=False)
    photo = db.Column (db.String(200))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column (db.String (20), unique=False, nullable=False)
    profile_programador = db.relationship ("Programador", backref="user", uselist=False)
    profile_empleador = db.relationship ("Empleador", backref="user", uselist=False)
    postulados= db.relationship ("Postulados", backref= "user", lazy=True)
   

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "username": self.username,
            "photo": self.photo,
            "country": self.country,
            "profile_programador": self.profile_programador.serialize(),
            "postulados": [postulados.serialize() for postulados in self.postulados]
            
        }

class Experience(Enum):
    JUNIOR: 'junior'
    MID: 'mid-level'
    SENIOR: 'senior'

class Programador(db.Model):
    __tablename__="programador"
    id = db.Column(db.Integer, primary_key=True)
    precio_hora = db.Column (db.Integer, nullable=False)
    tecnologias = db.Column (db.String(200), nullable=False)
    experiencia = db.Column(db.Enum(Experience), nullable=False)
    descripcion = db.Column(db.String(300))
    rating = db.Column (db.Float(2))
    proyectos = db.relationship ("Proyectos", backref="programador", lazy=True)
    user_id= db.Column (db.Integer, db.ForeignKey("user.id"), nullable=False)
    rating = db.relationship ("Ratings", backref="programador", lazy=True)

    def __repr__(self):
        return f'<Programador {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "precio_hora": self.precio_hora,
            "tecnologias": self.tecnologias,
            "experiencia": self.experiencia,
            "descripcion": self.descripcion,
            "rating": self.rating,
            "proyectos": [proyectos.serialize()for proyectos in self.proyectos]

        }

class Empleador(db.Model):
    __tablename__ = "empleador"
    id = db.Column(db.Integer, primary_key=True)
    cif = db.Column (db.Integer, unique=True, nullable=False)
    metodo_pago = db.Column (db.String(100), nullable=False)
    descripcion = db.Column(db.String(300))
    user_id= db.Column (db.Integer, db.ForeignKey("user.id"), nullable=False)
    rating = db.relationship ("Ratings", backref="empleador", lazy=True)
    

    def __repr__(self):
        return f'<Empleador {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "cif": self.cif,
            "metodo_pago": self.metodo_pago,
            "descripcion": self.descripcion,

        }
    

    
class Ratings(db.Model):
    __tablename__="ratings"
    #id = db.Column(db.Integer, primary_key=True) -> eliminar?
    from_id = db.Column (db.Integer, db.ForeignKey ("empleador.id"), primary_key=True)
    to_id = db.Column (db.Integer, db.ForeignKey ("programador.id"), primary_key=True)
    value = db.Column(db.Integer)
    

    def __repr__(self):
        return f'<Ratings {self.id}>'

    def serialize(self):
        return {
            "from_id": self.from_id,
            "to_id": self.to_id,
            "value": self.value
        }
    

class Favoritos(db.Model):
    __tablename__="favoritos"
    id = db.Column(db.Integer, primary_key=True)
    programador_id = db.Column (db.Integer, db.ForeignKey ("programador.id"), primary_key=True)
    empleador_id = db.Column (db.Integer, db.ForeignKey ("empleador.id"), primary_key=True)
    oferta_id =db.Column (db.Integer, db.ForeignKey ("ofertas.id"), primary_key=True)
    
    def __repr__(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            "programador_id": [programador.serialize() for programador in self.programador_id],
            "empleador_id": [empleador.seliarize()self.empleador_id],
            "oferta_id": self.oferta_id
            [postulados.serialize() for postulados in self.postulados]

            # do not serialize the password, its a security breach
        }

class Ofertas(db.Model):
    __tablename__="ofertas"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column (db.String (100), unique=True, nullable=False)
    #id_empleador= db.Column (db.Integer)
    descripcion = db.Column (db.String(700), nullable=False)
    salario = db.Column (db.Integer, nullable=False)
    plazo = db.Column(db.String(100), nullable=False)
    modalidad = db.Column(db.String(80), nullable=False)
    experiencia_minima = db.Column (db.String (100))
    fecha_publicacion = db.Column(db.Date, nullable=False)
    postulados= db.relationship ("Postulados", backref= "ofertas", lazy=True)
   
    #Profile_programador i profile_empleador pendiente

    def __repr__(self):
        return f'<Ofertas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "descripcion": self.descripcion,
            "salario": self.salario,
            "plazo": self.plazo,
            "modalidad": self.modalidad,
            "experiencia_minima": self.experiencia_minima,
            "fecha_publicacion": self.fecha_publicacion,
            #empleador_id

            # do not serialize the password, its a security breach
        }
    

class Proyectos(db.Model):
    __tablename__="proyectos"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)
    descripcion_corta = db.Column(db.String(150), nullable=False)
    git = db.Column(db.String(300))
    link = db.Column(db.String(500))
    tecnologias = db.Column (db.String(200), nullable=False)
    programador_id = db.Column (db.Integer, db.ForeignKey ("programador.id"))
    

    def __repr__(self):
        return f'<Programador {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "descripcion_corta": self.descripcion_corta,
            "git": self.git,
            "link": self.link,
            "tecnologias": self.tecnologias,
            "programador_id": self.programador_id

            # do not serialize the password, its a security breach
        }