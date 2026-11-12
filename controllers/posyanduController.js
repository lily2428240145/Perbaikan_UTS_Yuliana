
const Posyandu = require('../models/Posyandu');

// Menambahkan data posyandu
const createPosyandu = async (req, res, next) => {
  try {
    const { kode, nama } = req.body;

    const posyandu = await Posyandu.create({
      kode,
      nama
    });

    res.status(201).json({
      message: 'Data posyandu berhasil ditambahkan',
      data: posyandu
    });
  } catch (error) {
    next(error);
  }
};

// Menampilkan seluruh data posyandu
const getAllPosyandu = async (req, res, next) => {
  try {
    const posyandu = await Posyandu.find();

    res.status(200).json({
      message: 'Data posyandu berhasil diambil',
      data: posyandu
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPosyandu,
  getAllPosyandu
};
