const express = require('express');
const { createStore, getStores, updateStore, deleteStore } = require('../controllers/storeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createStore); // Crear tienda
router.get('/', authMiddleware, getStores); // Obtener tiendas del usuario
router.put('/:id', authMiddleware, updateStore); // Actualizar tienda
router.delete('/:id', authMiddleware, deleteStore); // Eliminar tienda

module.exports = router;