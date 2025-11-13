// src/routes/tasksRoutes.js
const express = require('express');
const router = express.Router();
const { createTask, listTasks, listTasksByUser } = require('../controllers/tasksController');

router.post('/tasks', createTask);
router.get('/tasks', listTasks);
router.get('/tasks/user/:userId', listTasksByUser);

module.exports = router;
