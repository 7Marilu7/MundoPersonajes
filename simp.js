// thesimpsons.js
$(document).ready(function() {
    // URL de la API de The Simpsons Quotes para obtener entre 12 y 15 personajes
    var apiUrl = "https://thesimpsonsquoteapi.glitch.me/quotes?count=" + getRandomInt(15, 15);
    $.get(apiUrl, function(data) {
        if (data && data.length > 0) {
            var characterContainer = $("#character-container");
            var uniqueCharacters = new Set();
            data.forEach(function(quote) {
                if (!uniqueCharacters.has(quote.character)) {
                    uniqueCharacters.add(quote.character);
                    var characterElement = $("<div class='character'></div>");
                    characterElement.append("<img src='" + quote.image + "' alt='" + quote.character + "'>");
                    characterElement.append("<p>" + quote.character + "</p>");
                    characterContainer.append(characterElement);
                }
            });
        } else {
            console.error("Error al obtener datos de la API de The Simpsons Quotes");
        }
    });
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

