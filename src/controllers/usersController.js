// src/controllers/usersController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUser(req, res) {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ error: "email is required" });

    const user = await prisma.user.create({
      data: { email, name },
    });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: err.message });
  }
}

async function listUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUserById(req, res) {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createUser, listUsers, getUserById };
