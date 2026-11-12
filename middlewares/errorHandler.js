
const errorHandler = (err, req, res, next) => {
  // Kesalahan format JSON
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: 'Format JSON tidak valid'
    });
  }

  // ID MongoDB tidak valid
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'Format ID tidak valid'
    });
  }

  // Validasi data gagal
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Validasi data gagal',
      details: Object.values(err.errors).map(error => error.message)
    });
  }

  // Data duplikat
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0];

    return res.status(409).json({
      message: `Data dengan ${field || 'nilai tersebut'} sudah terdaftar`
    });
  }

  // Kesalahan lainnya
  console.error(err);

  res.status(500).json({
    message: 'Terjadi kesalahan pada server'
  });
};

module.exports = errorHandler;
