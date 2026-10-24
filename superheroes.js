
document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("character-container");

    try {
        const response = await fetch(
            "https://akabab.github.io/superhero-api/api/all.json"
        );

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const characters = await response.json();
        container.replaceChildren();

        characters
            .filter(character => character.images?.md)
            .slice(0, 60)
            .forEach(character => {
                const card = document.createElement("div");
                card.className = "character";

                const image = document.createElement("img");
                image.src = character.images.md;
                image.alt = character.name || "Superhéroe";
                image.loading = "lazy";

                const name = document.createElement("p");
                name.textContent = character.name || "Sin nombre";

                image.onerror = () => card.remove();

                card.append(image, name);

                if (character.biography?.publisher) {
                    const publisher = document.createElement("p");
                    publisher.textContent =
                        character.biography.publisher;
                    card.appendChild(publisher);
                }

                container.appendChild(card);
            });

        if (!container.children.length) {
            container.textContent = "No se encontraron imágenes.";
        }
    } catch (error) {
        console.error("Error al cargar superhéroes:", error);
        container.textContent =
            "No se pudieron cargar los personajes. Intenta más tarde.";
    }
});
