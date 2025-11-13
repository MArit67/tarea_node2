// src/controllers/tasksController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTask(req, res) {
  try {
    const { title, userId } = req.body;
    if (!title || !userId) return res.status(400).json({ error: 'title and userId are required' });

    // opcional: verificar que el user exista
    const user = await prisma.user.findUnique({ where: { id: Number(userId) } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const task = await prisma.task.create({
  data: {
    title,
    userId: Number(userId),
  },
  include: { user: true }  
});

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function listTasks(req, res) {
  try {
    const tasks = await prisma.task.findMany({
      include: { user: true },
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function listTasksByUser(req, res) {
  try {
    const userId = Number(req.params.userId);
    const tasks = await prisma.task.findMany({
      where: { userId },
      include: { user: true },
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createTask, listTasks, listTasksByUser };
