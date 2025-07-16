// models/contacto.js
const db = require('../database/db');

async function guardarContacto(data) {
  const sql = `INSERT INTO contacto
    (DNI, nombre, correo, telefono, monto_solicitado, mensaje)
    VALUES (?, ?, ?, ?, ?, ?)`;
  const valores = [
    data.dni,
    data.nombre,
    data.correo,
    data.telefono,
    data.monto_solicitado,
    data.mensaje || null
  ];
  return db.execute(sql, valores);
}

module.exports = { guardarContacto };
