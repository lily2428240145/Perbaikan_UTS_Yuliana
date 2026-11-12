
const mongoose = require('mongoose');
const Imunisasi = require('../models/Imunisasi');

// Menambahkan data imunisasi
const createImunisasi = async (req, res, next) => {
  try {
    const {
      noCatatan,
      namaAnak,
      usiaBulan,
      jenisVaksin,
      orangTua,
      posyanduId
    } = req.body;

    const imunisasi = await Imunisasi.create({
      noCatatan,
      namaAnak,
      usiaBulan,
      jenisVaksin,
      orangTua,
      posyanduId
    });

    res.status(201).json({
      message: 'Data imunisasi berhasil ditambahkan',
      data: imunisasi
    });
  } catch (error) {
    next(error);
  }
};

// Menampilkan data imunisasi dengan filter dan projection
const getAllImunisasi = async (req, res, next) => {
  try {
    const filter = {};

    if (req.query.jenisVaksin) {
      filter.jenisVaksin = req.query.jenisVaksin;
    }

    const imunisasi = await Imunisasi.find(filter)
      .select('_id noCatatan namaAnak usiaBulan jenisVaksin');

    res.status(200).json({
      message: 'Data imunisasi berhasil diambil',
      jumlah: imunisasi.length,
      data: imunisasi
    });
  } catch (error) {
    next(error);
  }
};

// Menampilkan satu data imunisasi berdasarkan ID
const getImunisasiById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Format ID imunisasi tidak valid'
      });
    }

    const imunisasi = await Imunisasi.findById(id)
      .populate('posyanduId', 'kode nama');

    if (!imunisasi) {
      return res.status(404).json({
        message: 'Data imunisasi tidak ditemukan'
      });
    }

    res.status(200).json({
      message: 'Data imunisasi berhasil ditemukan',
      data: imunisasi
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createImunisasi,
  getAllImunisasi,
  getImunisasiById
};
