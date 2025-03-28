const express = require('express');
const { createStore, getStores, getStoreById, updateStore, deleteStore } = require('../controllers/storeController');
const { authMiddleware } = require('../middlewares/authMiddleware'); // Ensure correct import

const router = express.Router();

// Route to create a store
router.post('/', authMiddleware, createStore); // Ensure createStore is a valid function

// Route to get all stores
router.get('/', authMiddleware, getStores); // Ensure getStores is a valid function

// Route to get a store by ID
router.get('/:id', authMiddleware, getStoreById); // Ensure getStoreById is a valid function

// Route to update a store
router.put('/:id', authMiddleware, updateStore); // Ensure updateStore is a valid function

// Route to delete a store
router.delete('/:id', authMiddleware, deleteStore); // Ensure deleteStore is a valid function

module.exports = router;