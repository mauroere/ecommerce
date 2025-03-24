const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'ecommerce-platform',
    allowed_formats: ['jpg', 'png', 'mp4'], // Permitir imágenes y videos
  },
});

const upload = multer({ storage });

module.exports = upload;