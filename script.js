function init() {
    fetchPokemon();
};

/**
 * Loading Animations
 */

function startLoadingAnimation() {
    let overlay = document.getElementById('overlay-loading');
    overlay.classList.remove('d-none');
}

function endLoadingAnmiation() {
    let overlay = document.getElementById('overlay-loading');
    overlay.classList.add('d-none');
}

/**
 * Fetch Pokemon and Render Content
 */

let limit = 1;
let pokemonData = [];

// Wie kürzen?
async function fetchPokemon() {
    startLoadingAnimation();
    try {
        for (let i = limit; i < limit + 20; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            let response = await fetch(url);
            let responseToJson = await response.json();
            let pokemonDetail = {
                name: responseToJson.name,
                img: responseToJson.sprites.other['official-artwork'].front_default,
                types: responseToJson.types.map(typeInfo => typeInfo.type.name), 
                // typesInfo entspricht types[i], map iteriert durch die schleife
                bigImg: responseToJson.sprites.other['official-artwork'].front_default 
            };
            pokemonData.push(pokemonDetail);
        }
        console.log(pokemonData)
        renderPokemonCard();
    } catch (error) {
        console.log('Error Brudi');
    } finally {
        endLoadingAnmiation();
        console.log('Pokemon successfully fetched');
    }
}

function renderPokemonCard() {
    let content = document.getElementById('content');
    content.innerHTML = ''; 
    for (let p = 0; p < pokemonData.length; p++) {
        let pokemon = pokemonData[p]; 
        content.innerHTML += cardTemplate(pokemon, p); 
    }
}

/**
 * Open Big Pokemon Cards and Overlay
 */

function openDialog(p) {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d-none');
    let pokemon = pokemonData[p]; 
    overlay.innerHTML = bigCardTemplate(pokemon, p);
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add('d-none');
}

// Event Bubbling einfügen

function nextPokemon(j) {
    j = (j + 1 + pokemonData.length) % pokemonData.length; 
    openDialog(j);
}

function prevPokemon(j) {
    j = (j - 1 + pokemonData.length) % pokemonData.length; 
    openDialog(j);
}

function loadPokemon() {
    limit += 20;
    fetchPokemon()
}