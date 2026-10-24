
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("character-container");
    const apiUrl = "https://dragonball-api.com/api/characters?page=1&limit=20";

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Error al consultar la API");
            }

            return response.json();
        })
        .then(function (data) {
            const characters = data.items || [];

            container.replaceChildren();

            if (characters.length === 0) {
                container.textContent = "No se encontraron personajes.";
                return;
            }

            characters.forEach(function (character) {
                const card = document.createElement("div");
                card.className = "character";

                const image = document.createElement("img");
                image.src = character.image;
                image.alt = character.name;
                image.loading = "lazy";

                const name = document.createElement("p");
                name.textContent = character.name;

                const race = document.createElement("p");
                race.textContent = "Raza: " + (character.race || "Desconocida");

                const ki = document.createElement("p");
                ki.textContent = "Ki: " + (character.ki || "No disponible");

                image.onerror = function () {
                    image.alt = "Imagen no disponible: " + character.name;
                    image.removeAttribute("src");
                };

                card.append(image, name, race, ki);
                container.appendChild(card);
            });
        })
        .catch(function (error) {
            console.error("Error al cargar Dragon Ball:", error);
            container.replaceChildren();

            const message = document.createElement("p");
            message.textContent =
                "No se pudieron cargar los personajes. Intenta más tarde.";

            container.appendChild(message);
        });
});
