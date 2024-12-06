const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Definir rotas
router.get('/locations', locationController.getAllLocations);
router.get('/locations/:id', locationController.getLocationById);

module.exports = router;
