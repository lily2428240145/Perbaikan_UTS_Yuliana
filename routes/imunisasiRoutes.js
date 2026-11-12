
const express = require('express');
const router = express.Router();

const {
  createImunisasi,
  getAllImunisasi,
  getImunisasiById
} = require('../controllers/imunisasiController');

// POST /imunisasi
router.post('/', createImunisasi);

// GET /imunisasi
router.get('/', getAllImunisasi);

// GET /imunisasi/:id
router.get('/:id', getImunisasiById);

module.exports = router;
