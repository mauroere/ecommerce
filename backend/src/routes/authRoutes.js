const express = require('express');
const { register, login, oauthLogin, exampleHandler, getCurrentUser } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware'); // Ensure correct import
const authenticate = require('../middlewares/authenticate'); // Middleware para verificar el token

const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

// OAuth login route
router.post('/oauth-login', oauthLogin);

// Example route
router.get('/example', exampleHandler);

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Current user route
router.get('/me', authenticate, getCurrentUser);

module.exports = router;