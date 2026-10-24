
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("character-container");
    const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("No se pudieron obtener los personajes");
            }

            return response.json();
        })
        .then(function (characters) {
            container.replaceChildren();

            characters.forEach(function (character) {
                const card = document.createElement("div");
                card.className = "character";

                const image = document.createElement("img");
                image.src = character.image || "";
                image.alt = character.name;
                image.loading = "lazy";

                image.onerror = function () {
                    image.remove();
                };

                const name = document.createElement("p");
                name.textContent = character.name;

                const species = document.createElement("p");
                species.textContent =
                    "Especie: " + (character.species || "No disponible");

                const gender = document.createElement("p");
                gender.textContent =
                    "Género: " + (character.gender || "No disponible");

                const planet = document.createElement("p");
                planet.textContent =
                    "Planeta: " + (character.homeworld || "No disponible");

                card.append(image, name, species, gender, planet);
                container.appendChild(card);
            });
        })
        .catch(function (error) {
            console.error("Error al cargar Star Wars:", error);
            container.replaceChildren();

            const message = document.createElement("p");
            message.textContent =
                "No se pudieron cargar los personajes. Intenta más tarde.";

            container.appendChild(message);
        });
});
