// src/index.js
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const tasksRoutes = require('./routes/tasksRoutes'); // lo crearemos luego

const app = express();
app.use(express.json());

app.use(usersRoutes);
app.use(tasksRoutes); // temporal: si no existe, crea archivo con router vacío

app.get('/', (req, res) => res.json({ ok: true, message: 'API running' }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

