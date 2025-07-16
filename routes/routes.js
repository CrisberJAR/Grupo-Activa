// routes/routes.js
const express = require('express');
const router = express.Router();
const { guardarContacto } = require('../models/contacto');

router.get('/', (req, res) => {res.render('index'); });
router.get('/servicios', (req, res) => {res.render('servicios');});
router.get('/quienes-somos', (req, res) => {res.render('quienes-somos');});
router.get('/simulador', (req, res) => {res.render('simulador');});
router.get('/contacto', (req, res) => {res.render('contacto');});

// POST: Guarda contacto
router.post('/contacto', async (req, res) => {
    console.log("LLEGA AL POST /contacto");
  const { dni, nombre, correo, telefono, monto_solicitado, mensaje } = req.body;
  try {
    await guardarContacto({
      dni,
      nombre,
      correo,
      telefono,
      monto_solicitado,
      mensaje
    });
    res.render('contacto', { mensaje: "¡Gracias! Pronto te contactaremos." });
  } catch (error) {
    console.error(error);
    res.render('contacto', { mensaje: "Ocurrió un error al guardar tus datos." });
  }
});

module.exports = router;

