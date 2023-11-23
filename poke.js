$(document).ready(function() {
    // URL de la API de Pokémon para obtener personajes
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/";

    $.get(apiUrl + "?limit=20", function(data) {
        if (data && data.results) {
            var characterContainer = $("#character-container");
            data.results.forEach(function(pokemon) {
                var pokemonElement = $("<div class='character'></div>");
                $.get(pokemon.url, function(pokemonData) {
                    var imageUrl = pokemonData.sprites.other["official-artwork"].front_default || pokemonData.sprites.front_default;
                    pokemonElement.append("<img src='" + imageUrl + "' alt='" + pokemon.name + "'>");
                    pokemonElement.append("<p>" + pokemon.name + "</p>");
                    characterContainer.append(pokemonElement);
                });
            });
        } else {
            console.error("Error al obtener datos de la API de Pokémon");
        }
    });
});
