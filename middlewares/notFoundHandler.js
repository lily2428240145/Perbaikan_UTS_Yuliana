
const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: `Endpoint ${req.originalUrl} tidak ditemukan`
  });
};

module.exports = notFoundHandler;
