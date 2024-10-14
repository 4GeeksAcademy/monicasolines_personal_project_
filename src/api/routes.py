"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Vehiculo, Reparacion
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/usuarios', methods=['GET'])
def get_usuarios():
    usuarios = Usuario.query.all()
    if usuarios == []:
        return jsonify({"MSG":"No existen usuarios"}), 404
    return jsonify([u.serialize() for u in usuarios]), 200

@api.route('/usuarios', methods=['POST'])
def crear_usuario():
    datos = request.json
    exist_user = Usuario.query.filter_by(email=datos["email"]).first()
    if exist_user: 
        return jsonify({"MSG": "Ya existe el usuario"}), 404
    
    usuario = Usuario(
        nombre=datos['nombre'],
        apellido=datos['apellido'], 
        email=datos['email'], 
        #password=generate_password_hash(datos['contraseña']), 
        password= datos["password"], 
        rol=datos['rol'],
        telefono = datos ["telefono"],
        )
    db.session.add(usuario)
    db.session.commit()
    return jsonify({'mensaje': 'Usuario creado exitosamente'}), 201

@api.route('/usuarios/<int:id>', methods=['GET'])
def get_usuario(id):
    usuario = Usuario.query.filter_by(id=id).first()
    if usuario is None: 
        return jsonify({"msg": "no existe el usuario"}), 404
    return jsonify(usuario.serialize()), 200

@api.route('/usuarios/<int:id>', methods=['PUT'])
def actualizar_usuario(id):
    usuario = Usuario.query.filter_by(id=id).first()
    if usuario is None: 
        return jsonify({"msg": "no existe el usuario"}), 404
    
    datos = request.json
    usuario.nombre = datos['nombre']
    usuario.apellido = datos['apellido']
    usuario.email = datos['email']
   # usuario.contraseña = generate_password_hash(datos['contraseña'])
    usuario.password = datos ["password"]
    usuario.rol = datos['rol']
    usuario.telefono = datos["telefono"]
    db.session.commit()
    return jsonify({'mensaje': 'Usuario actualizado exitosamente'})

@api.route('/usuarios/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    usuario = Usuario.query.filter_by(id=id).first()
    if usuario is None: 
        return jsonify({"msg": "no existe el usuario"}), 404
    
    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'mensaje': 'Usuario eliminado exitosamente'})

@api.route('/vehiculos', methods=['GET'])
def get_vehiculos():
    vehiculos = Vehiculo.query.all()
    if vehiculos == []:
        return jsonify({"MSG":"No existen vehiculos"}), 404
    return jsonify([u.serialize() for u in vehiculos]), 200


@api.route('/vehiculos', methods=['POST'])
def crear_vehiculo():
    datos = request.json
    existe = Vehiculo.query.filter_by(matricula=datos["matricula"]).first()
    if existe: 
        return jsonify({"msg": "Ya existe el vehiculo"}), 404
    
    vehiculo = Vehiculo(
        codigo_producto=datos['codigo_producto'],
        matricula=datos['matricula'], 
        transporte=datos['transporte'], 
        kilometraje=datos['kilometraje'], 
        oem=datos['oem'], 
        )
    
    db.session.add(vehiculo)
    db.session.commit()
    return jsonify({'mensaje': 'Vehículo creado exitosamente'}), 201

@api.route('/vehiculos/<int:id>', methods=['DELETE'])
def eliminar_vehiculo(id):
    vehiculo = Vehiculo.query.filter_by(id=id).first()
    if vehiculo is None:
        return jsonify({"msg": "no existe el vehículo"}), 404
    
    db.session.delete(vehiculo)
    db.session.commit()
    return jsonify({'mensaje': 'Vehículo eliminado exitosamente'}), 200


#@api.route('/usuarios/<int:id>', methods=['GET'])
#def get_usuario(id):
#    usuario = Usuario.query.filter_by(id=id).first()
#    if usuario is None: 
#        return jsonify({"msg": "no existe el usuario"}), 404
#    return jsonify(usuario.serialize()), 200 

@api.route('/vehiculos/<int:id>', methods=['PUT'])
def actualizar_vehiculo(id):
    vehiculo = Vehiculo.query.filter_by(id=id).first()
    if vehiculo is None: 
        return jsonify({"msg": "No existe el vehículo"}), 404
    
    datos = request.json
    vehiculo.codigo_producto = datos['codigo_producto']
    vehiculo.matricula = datos['matricula']
    vehiculo.transporte = datos['transporte']
    vehiculo.kilometraje = datos['kilometraje']
    vehiculo.oem = datos['oem']
    
    db.session.commit()
    return jsonify({'mensaje': 'Vehículo actualizado exitosamente'})


@api.route('/usuarios/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    usuario = Usuario.query.filter_by(id=id).first()
    if usuario is None: 
        return jsonify({"msg": "no existe el usuario"}), 404
    
    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'mensaje': 'Usuario eliminado exitosamente'})

@api.route('/reparaciones', methods=['GET'])
def obtener_reparaciones():
    reparaciones = Reparacion.query.all()
    return jsonify([reparacion.serialize() for reparacion in reparaciones])

@api.route('/reparaciones/<int:id>', methods=['GET'])
def obtener_reparacion(id):
    reparacion = Reparacion.query.filter_by(id=id).first()
    if reparacion is None:
        return jsonify({"msg": "No existe la reparación"}), 404
    
    return jsonify(reparacion.serialize())

@api.route('/reparaciones', methods=['POST'])
def crear_reparacion():
    data = request.get_json()

    nueva_reparacion = Reparacion(
        nombre_chofer_propietario=data.get('nombre_chofer_propietario'),
        vehiculo_id=data.get('vehiculo_id'),
        fallas=data.get('fallas'),
        DTC=data.get('DTC'),
        solucion=data.get('solucion'),
        tecnico_id=data.get('tecnico_id'),
        fecha_ingreso=data.get('fecha_ingreso'),
        fecha_reparacion=data.get('fecha_reparacion'),
        costo_reparacion=data.get('costo_reparacion'),
        monto_cancelado_tecnico=data.get('monto_cancelado_tecnico'),
        porcentaje_ganancia_tecnico=data.get('porcentaje_ganancia_tecnico'),
        porcentaje_ganancia_empresa=data.get('porcentaje_ganancia_empresa'),
        check_list_pago=data.get('check_list_pago'),
        fecha_salida=data.get('fecha_salida'),
        reporte=data.get('reporte')
    )

    db.session.add(nueva_reparacion)
    db.session.commit()
    return jsonify(nueva_reparacion.serialize()), 201

@api.route('/reparaciones/<int:id>', methods=['PUT'])
def actualizar_reparacion(id):
    reparacion = Reparacion.query.filter_by(id=id).first()
    if reparacion is None:
        return jsonify({"msg": "No existe la reparación"}), 404

    data = request.get_json()

    reparacion.nombre_chofer_propietario = data.get('nombre_chofer_propietario', reparacion.nombre_chofer_propietario)
    reparacion.vehiculo_id = data.get('vehiculo_id', reparacion.vehiculo_id)
    reparacion.fallas = data.get('fallas', reparacion.fallas)
    reparacion.DTC = data.get('DTC', reparacion.DTC)
    reparacion.solucion = data.get('solucion', reparacion.solucion)
    reparacion.tecnico_id = data.get('tecnico_id', reparacion.tecnico_id)
    reparacion.fecha_ingreso = data.get('fecha_ingreso', reparacion.fecha_ingreso)
    reparacion.fecha_reparacion = data.get('fecha_reparacion', reparacion.fecha_reparacion)
    reparacion.costo_reparacion = data.get('costo_reparacion', reparacion.costo_reparacion)
    reparacion.monto_cancelado_tecnico = data.get('monto_cancelado_tecnico', reparacion.monto_cancelado_tecnico)
    reparacion.porcentaje_ganancia_tecnico = data.get('porcentaje_ganancia_tecnico', reparacion.porcentaje_ganancia_tecnico)
    reparacion.porcentaje_ganancia_empresa = data.get('porcentaje_ganancia_empresa', reparacion.porcentaje_ganancia_empresa)
    reparacion.check_list_pago = data.get('check_list_pago', reparacion.check_list_pago)
    reparacion.fecha_salida = data.get('fecha_salida', reparacion.fecha_salida)
    reparacion.reporte = data.get('reporte', reparacion.reporte)

    db.session.commit()
    return jsonify(reparacion.serialize())

@api.route('/reparaciones/<int:id>', methods=['DELETE'])
def eliminar_reparacion(id):
    reparacion = Reparacion.query.filter_by(id=id).first()
    if reparacion is None:
        return jsonify({"msg": "No existe la reparación"}), 404
    
    db.session.delete(reparacion)
    db.session.commit()
    return jsonify({'mensaje': 'Reparación eliminada exitosamente'})
