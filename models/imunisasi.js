
const mongoose = require('mongoose');

const imunisasiSchema = new mongoose.Schema({
  noCatatan: {
    type: String,
    required: [true, 'Nomor catatan wajib diisi'],
    unique: true,
    trim: true
  },
  namaAnak: {
    type: String,
    required: [true, 'Nama anak wajib diisi'],
    trim: true
  },
  usiaBulan: {
    type: Number,
    required: [true, 'Usia anak wajib diisi'],
    min: [0, 'Usia tidak boleh kurang dari 0']
  },
  jenisVaksin: {
    type: String,
    required: [true, 'Jenis vaksin wajib diisi'],
    trim: true
  },
  orangTua: {
    type: new mongoose.Schema({
      nama: {
        type: String,
        required: [true, 'Nama orang tua wajib diisi'],
        trim: true
      },
      telepon: {
        type: String,
        required: [true, 'Nomor telepon wajib diisi'],
        trim: true
      }
    }, { _id: false }),
    required: true
  },
  posyanduId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posyandu',
    required: [true, 'Posyandu wajib dipilih']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Imunisasi', imunisasiSchema);
