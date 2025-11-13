// src/routes/usersRoutes.js
const express = require('express');
const router = express.Router();
const { createUser, listUsers, getUserById } = require('../controllers/usersController');

router.post('/users', createUser);
router.get('/users', listUsers);
router.get('/users/:id', getUserById);

module.exports = router;
