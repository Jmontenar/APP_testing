const express = require('express');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/city', cityRouter)

module.exports = router;