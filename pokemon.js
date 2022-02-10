document.getElementById('button1').addEventListener('click', getPokemon);

// Load single Pokemon
function getPokemon() {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', 'pokemon.json', true);

    xhr.onload = function() {
        if(this.status === 200) {
            const pokemon = JSON.parse(this.responseText);
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

            let output = ''; // Lets us reassign output.

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