
document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("character-container");

    try {
        const response = await fetch(
            "https://api.disneyapi.dev/character?pageSize=30"
        );

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const result = await response.json();
        const characters = Array.isArray(result.data)
            ? result.data
            : result.data
                ? [result.data]
                : [];

        container.replaceChildren();

        characters.forEach(character => {
            const imageUrl = character.imageUrl;
            if (!imageUrl) return;

            const card = document.createElement("div");
            card.className = "character";

            const image = document.createElement("img");
            image.src = imageUrl;
            image.alt = character.name || "Personaje Disney";
            image.loading = "lazy";

            const name = document.createElement("p");
            name.textContent = character.name || "Sin nombre";

            image.onerror = () => card.remove();

            card.append(image, name);
            container.appendChild(card);
        });

        if (!container.children.length) {
            container.textContent = "No se encontraron imágenes.";
        }
    } catch (error) {
        console.error("Error al cargar Disney:", error);
        container.textContent =
            "No se pudieron cargar los personajes. Intenta más tarde.";
    }
});
