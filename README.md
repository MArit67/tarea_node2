# Taller Node.js + Express + Prisma + Supabase

## Descripción
API REST con endpoints para Users y Tasks. Puerto: 3000.

## Endpoints
- POST /users
- GET /users
- GET /users/:id
- POST /tasks
- GET /tasks
- GET /tasks/user/:userId

## Ejecutar
1. Definir DATABASE_URL en .env (connection string de Supabase).
2. `npm install`
3. `npx prisma migrate dev --name init` (si es necesario)
4. `npm run dev`
