document.addEventListener("DOMContentLoaded", function () {
    const characterContainer = document.getElementById("characterContainer");
  
    // Al cargar la página de personajes, obtén y muestra los datos de Rick and Morty
    fetch("/api/rickandmorty")
      .then(response => response.json())
      .then(data => displayCharacterGallery(data))
      .catch(error => console.error("Error al obtener datos de la API:", error));
  
    // Muestra el mosaico de personajes
    function displayCharacterGallery(characters) {
      characters.forEach(character => {
        const characterItem = document.createElement("div");
        characterItem.className = "character-item";
        characterItem.innerHTML = `<img src="${character.image}" alt="${character.name}" onclick="redirectToDetails(${character.id})">`;
        characterContainer.appendChild(characterItem);
      });
    }
  
    // Redirige a la página de detalles del personaje con el ID correspondiente
    window.redirectToDetails = function (characterId) {
      window.location.href = `characters.html?id=${characterId}`;
    };
  });
  
  