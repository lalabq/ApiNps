import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET    => Busca
 * POST   => Salvar
 * PUT    => Alterar
 * DELETE => Apagar
 * PATCH  => Alteração específica
 */

// http://localhost:3333/users
app.get("/", (request, response) => {
  return response.json({ message: "Hello, world" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));