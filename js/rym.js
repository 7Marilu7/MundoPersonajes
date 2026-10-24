$(document).ready(function() {
    // URL de la API de Rick and Morty para obtener personajes
    var apiUrl = "https://rickandmortyapi.com/api/character/";

    $.get(apiUrl, function(data) {
        if (data && data.results) {
            var characterContainer = $("#character-container");
            data.results.forEach(function(character) {
                var characterElement = $("<div class='character'></div>");
                characterElement.append("<img src='" + character.image + "' alt='" + character.name + "'>");
                characterElement.append("<p>" + character.name + "</p>");
                characterElement.append("<p>Estado: " + character.status + "</p>");
                characterContainer.append(characterElement);
            });
        } else {
            console.error("Error al obtener datos de la API de Rick and Morty");
        }
    });
});
