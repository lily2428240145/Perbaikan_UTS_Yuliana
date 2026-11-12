
const express = require('express');
const router = express.Router();

const {
  createPosyandu,
  getAllPosyandu
} = require('../controllers/posyanduController');

// POST /posyandu
router.post('/', createPosyandu);

// GET /posyandu
router.get('/', getAllPosyandu);

module.exports = router;
