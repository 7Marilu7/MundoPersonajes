// naruto.js
$(document).ready(function() {
    // URL de la API Jikan de MyAnimeList para obtener información sobre Naruto
    var apiUrl = "https://api.jikan.moe/v3/anime/20/characters_staff"; // El ID 20 corresponde a Naruto

    // Realizar una solicitud GET a la API
    $.get(apiUrl, function(data) {
        // Verificar si la solicitud fue exitosa
        if (data && data.characters) {
            // Obtener la referencia al contenedor de personajes
            var characterContainer = $("#character-container");

            // Utilizar un conjunto para evitar personajes duplicados
            var uniqueCharacters = new Set();

            // Iterar sobre los resultados y agregar cada personaje al mosaico
            data.characters.forEach(function(character) {
                // Verificar si el personaje ya está en el conjunto
                if (!uniqueCharacters.has(character.name)) {
                    // Agregar el personaje al conjunto
                    uniqueCharacters.add(character.name);

                    // Crear un elemento de personaje
                    var characterElement = $("<div class='character'></div>");

                    // Agregar la imagen del personaje (si está disponible)
                    if (character.images && character.images.image_url) {
                        characterElement.append("<img src='" + character.images.image_url + "' alt='" + character.name + "'>");
                    }

                    // Agregar el nombre del personaje
                    characterElement.append("<p>" + character.name + "</p>");

                    // Agregar más información según sea necesario

                    // Agregar el elemento de personaje al contenedor
                    characterContainer.append(characterElement);
                }
            });
        } else {
            // Manejar un error si la solicitud no fue exitosa
            console.error("Error al obtener datos de la API de Jikan para Naruto", data);
        }
    }).fail(function(error) {
        // Manejar errores de la solicitud AJAX
        console.error("Error de solicitud AJAX", error);
    });
});
    