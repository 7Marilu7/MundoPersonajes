
$(document).ready(function () {
    const characterContainer = $("#character-container");
    const apiUrl = "https://thesimpsonsapi.com/api/characters?page=1";
    const imageBase = "https://cdn.thesimpsonsapi.com/500";

    characterContainer.empty();
    characterContainer.append(
        $("<p>").text("Cargando personajes de Los Simpson...")
    );

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("La API respondió con un error: " + response.status);
            }

            return response.json();
        })
        .then(function (data) {
            // Admite las dos estructuras de respuesta habituales.
            const characters =
                data.results ||
                (data.characters && data.characters.results) ||
                [];

            characterContainer.empty();

            if (characters.length === 0) {
                characterContainer.append(
                    $("<p>").text("No se encontraron personajes.")
                );
                return;
            }

            characters.forEach(function (character) {
                const card = $("<div>").addClass("character");
                const image = $("<img>");
                const name = $("<p>").text(
                    character.name || "Personaje sin nombre"
                );

                let imageUrl = character.portrait_path || character.image || "";

                if (imageUrl && imageUrl.startsWith("/")) {
                    imageUrl = imageBase + imageUrl;
                }

                if (imageUrl) {
                    image.attr("src", imageUrl);
                } else {
                    image.attr(
                        "src",
                        "https://placehold.co/200x200?text=Sin+imagen"
                    );
                }

                image.attr("alt", character.name || "Personaje de Los Simpson");
                image.attr("loading", "lazy");

                image.on("error", function () {
                    $(this)
                        .off("error")
                        .attr(
                            "src",
                            "https://placehold.co/200x200?text=Sin+imagen"
                        );
                });

                card.append(image);
                card.append(name);

                // Información adicional al pasar el cursor.
                if (character.occupation) {
                    card.attr("title", character.occupation);
                }

                characterContainer.append(card);
            });
        })
        .catch(function (error) {
            console.error("Error al cargar Los Simpson:", error);

            characterContainer.empty().append(
                $("<p>").text(
                    "No se pudieron cargar los personajes. Intenta recargar la página."
                )
            );
        });
});
