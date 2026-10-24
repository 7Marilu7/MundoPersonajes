
document.addEventListener("DOMContentLoaded", async function () {
    const container = document.getElementById("character-container");
    const apiUrl = "https://hawapi.theproject.id/api/v1/characters";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const result = await response.json();

        const characters = Array.isArray(result)
            ? result
            : (result.data || result.content || result.results || []);

        container.replaceChildren();

        characters.forEach(character => {
            const imageUrl =
                character.thumbnail ||
                (character.images && character.images[0]);

            if (!imageUrl) return;

            const card = document.createElement("div");
            card.className = "character";

            const image = document.createElement("img");
            image.src = imageUrl;
            image.alt = "Personaje de Stranger Things";
            image.loading = "lazy";

            const name = document.createElement("p");
            name.textContent = [
                character.first_name,
                character.last_name
            ].filter(Boolean).join(" ") || "Personaje";

            image.onerror = () => card.remove();

            card.append(image, name);
            container.appendChild(card);
        });

        if (!container.children.length) {
            container.textContent = "No se encontraron imágenes.";
        }
    } catch (error) {
        console.error("Error en Stranger Things:", error);
        container.textContent =
            "No se pudieron cargar los personajes. Intenta más tarde.";
    }
});
