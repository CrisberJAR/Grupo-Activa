// routes/routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.render('index'); });

router.get('/servicios', (req, res) => {res.render('servicios');});

router.get('/quienes-somos', (req, res) => {res.render('quienes-somos');});

router.get('/simulador', (req, res) => {res.render('simulador');});

router.get('/contacto', (req, res) => {res.render('contacto');});
module.exports = router;

