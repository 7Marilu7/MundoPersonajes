const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/rickandmorty', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de Pokémon' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
