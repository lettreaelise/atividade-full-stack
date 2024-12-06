const locations = require('../models/locationModel');

exports.getAllLocations = (req, res) => {
  res.json(locations);
};

exports.getLocationById = (req, res) => {
  const { id } = req.params;
  const location = locations.find(loc => loc.id === parseInt(id));

  if (!location) {
    return res.status(404).json({ message: 'Localização não encontrada.' });
  }

  res.json(location);
};
