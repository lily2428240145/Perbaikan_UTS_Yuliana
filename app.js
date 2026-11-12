
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/database');

const posyanduRoutes = require('./routes/posyanduRoutes');
const imunisasiRoutes = require('./routes/imunisasiRoutes');

const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST']
}));

// Membaca request JSON
app.use(express.json());

// Halaman utama
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Pencatatan Imunisasi berjalan!'
  });
});

// Routes
app.use('/posyandu', posyanduRoutes);
app.use('/imunisasi', imunisasiRoutes);

// Penanganan URL tidak ditemukan
app.use(notFoundHandler);

// Penanganan error
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Jalankan server setelah database terhubung
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server gagal dijalankan:', error.message);
    process.exit(1);
  }
};

startServer();
