const express = require('express');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.post(
  '/',
  authMiddleware,
  [
      body('name').notEmpty().withMessage('Name is required'),
      body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
      body('stock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
      body('category').notEmpty().withMessage('Category is required'),
  ],
  createProduct
);// Crear producto
router.get('/', authMiddleware, validateGetProducts, getProducts); // Obtener productos
router.put('/:id', authMiddleware, updateProduct); // Actualizar producto
router.delete('/:id', authMiddleware, deleteProduct); // Eliminar producto

module.exports = router;