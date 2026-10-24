
document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("character-container");
    const apiUrl = "https://api.jikan.moe/v4/top/characters?limit=25";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const result = await response.json();
        const characters = result.data || [];

        container.replaceChildren();

        characters.forEach(character => {
            const imageUrl =
                character.images?.jpg?.image_url ||
                character.images?.webp?.image_url;

            if (!imageUrl) return;

            const card = document.createElement("div");
            card.className = "character";

            const image = document.createElement("img");
            image.src = imageUrl;
            image.alt = character.name || "Personaje de anime";
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
        console.error("Error al cargar anime:", error);
        container.textContent =
            "No se pudieron cargar los personajes. Intenta más tarde.";
    }
});
