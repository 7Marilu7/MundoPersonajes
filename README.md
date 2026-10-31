# MundoPersonajes

Sitio web interactivo para explorar personajes de series, películas, caricaturas y universos populares, desarrollado con HTML, CSS, JavaScript y Node.js.

## Descripción

MundoPersonajes es una aplicación web que permite explorar personajes de diferentes universos del entretenimiento mediante una colección de galerías dinámicas. Utiliza APIs públicas para obtener información e imágenes de los personajes y presentarlos en una interfaz visual organizada y adaptable a distintos dispositivos.

El sitio reúne diferentes franquicias en un solo lugar, facilitando la exploración de sus personajes y algunas de sus características.

## Funcionalidades

- Página principal con un mosaico de ocho universos del entretenimiento.
- Galerías dinámicas de personajes.
- Integración con APIs públicas para obtener información e imágenes.
- Exploración de personajes (Rick and Morty, Pokémon, Los Simpson, Dragon Ball, Star Wars, Harry Potter, Disney, Superhéroes)
- Visualización de información adicional como estado, especie, raza, planeta o editorial, según el universo.
- Diseño adaptable a dispositivos móviles.
- Carga dinámica de imágenes y contenido.
- Manejo de errores cuando las APIs no están disponibles o no devuelven información.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- APIs REST
- Node.js
- Express
- jQuery

## Estructura del proyecto

```text
MundoPersonajes/
├── html/
├── imagenes/
├── js/
├── index.html
├── styles.css
├── script.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalación local

1. Instala Node.js y npm.

2. Clona este repositorio:

```bash
git clone https://github.com/7Marilu7/MundoPersonajes.git
```

3. Accede a la carpeta del proyecto:

```bash
cd MundoPersonajes
```

4. Instala las dependencias:

```bash
npm install
```

5. Inicia el servidor local:

```bash
npm start
```

6. Abre en tu navegador:

`http://localhost:3000`

## APIs utilizadas

El proyecto integra diferentes APIs públicas para consultar información de los personajes:

- [Rick and Morty API](https://rickandmortyapi.com/)
- [PokéAPI](https://pokeapi.co/)
- [The Simpsons API](https://thesimpsonsapi.com/)
- [Dragon Ball API](https://web.dragonball-api.com/)
- [Harry Potter API](https://hp-api.onrender.com/)
- [Disney API](https://disneyapi.dev/)
- [Star Wars API](https://akabab.github.io/starwars-api/)
- [Superhero API](https://akabab.github.io/superhero-api/)

La disponibilidad y respuesta de los datos dependen de los servicios externos.

## Estado del proyecto

Proyecto desarrollado como parte de un portafolio personal.

## Autoría

Desarrollado por **María Guadalupe Cruz Paz**.

[GitHub](https://github.com/7Marilu7)
