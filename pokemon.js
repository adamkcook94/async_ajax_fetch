document.getElementById('button1').addEventListener('click', getPokemon);

// Load single Pokemon
function getPokemon() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'pokemon.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const pokemon = JSON.parse(this.responseText); 
            // We won't be able to get things like 'pokemon.id' without using JSON.parse. 
            // So it's taking the JSON string and allowing us to convert it to a HTML response.
            const output = 
            ` <ul>
                <li>${pokemon.id}</li>
                <li>${pokemon.name}</li>
                <li>${pokemon.type}</li>
            </ul>`;
            document.getElementById('pokemon').innerHTML = output;
        }
    }
    xhr.send();
}

// Load multiple Pokemon
document.getElementById('button2').addEventListener('click', getPokemons);

function getPokemons() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'pokemons.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const pokemons = JSON.parse(this.responseText);

            let output = ''; // Lets us reassign output.*

            pokemons.forEach(function(pokemons){ // Allows us to loop through the array
                output += ` 
                <ul>
                    <li>${pokemons.id}</li>
                    <li>${pokemons.name}</li>
                    <li>${pokemons.type}</li>
                </ul>`;
            });
            
            document.getElementById('pokemons').innerHTML = output;
        }
    }
    xhr.send();
}

// += means append.
// * remember that let allows variables to be reassigned so you used let for things like loops
// ForEach: 