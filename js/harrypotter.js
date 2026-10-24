
document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("character-container");
    const apiUrl = "https://hp-api.onrender.com/api/characters";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("No se pudieron obtener los personajes");
        }

        const characters = await response.json();
        container.replaceChildren();

        // Mostramos hasta 40 personajes con imagen.
        characters
            .filter(character => character.image)
            .slice(0, 40)
            .forEach(character => {
                const card = document.createElement("div");
                card.className = "character";

                const image = document.createElement("img");
                image.src = character.image;
                image.alt = character.name || "Personaje de Harry Potter";
                image.loading = "lazy";

                const name = document.createElement("p");
                name.textContent = character.name || "Sin nombre";

                image.onerror = function () {
                    card.remove();
                };

                card.append(image, name);

                if (character.house) {
                    const house = document.createElement("p");
                    house.textContent = character.house;
                    card.appendChild(house);
                }

                container.appendChild(card);
            });

        if (!container.children.length) {
            container.textContent = "No se encontraron imágenes.";
        }
    } catch (error) {
        console.error(error);
        container.textContent =
            "No se pudieron cargar los personajes. Intenta más tarde.";
    }
});
