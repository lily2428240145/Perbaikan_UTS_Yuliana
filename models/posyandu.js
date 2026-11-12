
const mongoose = require('mongoose');

const posyanduSchema = new mongoose.Schema({
  kode: {
    type: String,
    required: [true, 'Kode posyandu wajib diisi'],
    unique: true,
    uppercase: true,
    trim: true
  },
  nama: {
    type: String,
    required: [true, 'Nama posyandu wajib diisi'],
    trim: true
  }
}, {
  timestamps: false
});

module.exports = mongoose.model('Posyandu', posyanduSchema);
