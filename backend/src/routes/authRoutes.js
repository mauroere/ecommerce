const express = require('express');
const { register, login, oauthLogin, exampleHandler } = require('../controllers/authController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

// OAuth login route
router.post('/oauth', oauthLogin);

// Example route fix: Ensure the callback function exists
router.get('/example-route', exampleHandler); // Ensure exampleHandler is defined and exported

// Protected route example
router.get('/profile', authenticate, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;