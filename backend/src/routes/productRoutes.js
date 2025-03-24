const express = require('express');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createProduct); // Crear producto
router.get('/', authMiddleware, getProducts); // Obtener productos
router.put('/:id', authMiddleware, updateProduct); // Actualizar producto
router.delete('/:id', authMiddleware, deleteProduct); // Eliminar producto

module.exports = router;