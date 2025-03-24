const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, upload.single('file'), (req, res) => {
  res.status(200).json({ url: req.file.path });
});

module.exports = router;