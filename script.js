function init() {
    startLoadingAnimation();
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
let pokemon = [];

async function fetchPokemon() {
    try {
        for (let i = limit; i < limit + 20; i++) {
            let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            let response = await fetch(url);
            let responseToJson = await response.json();
            pokemon.push(responseToJson)
        }
        renderPokemonCard();
        console.log(pokemon);
    } catch (error) {
        console.log('Error Brudi');
    } finally {
        endLoadingAnmiation();
        console.log('Pokemon successfully fetched')
    }
}

function renderPokemonCard() {
    for (let p = 0; p < pokemon.length; p++) {
        let content = document.getElementById('content');
        let name = pokemon[p].name;
        let img = pokemon[p].sprites.front_default;        
        let type = getTypes(p);
        console.log(type[0]);
        content.innerHTML += cardTemplate(p, name, img, type[0]);
    }
}

function getTypes(p) {
    let allTypes = pokemon[p].types
    for (let t = 0; t < pokemon[p].types.length; t++) {
        let types = [];
        types.push(allTypes[t].type.name);
        return types;
    }
}

/**
 * Open Big Pokemon Cards and Overlay
 */

function openDialog(p) {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d-none');
    let name = pokemon[p].name;
    let img = pokemon[p].sprites.other.showdown.front_default;
    let type = getTypes(p);
    let j = p;
    overlay.innerHTML = bigCardTemplate(j, name, img, type);
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add('d-none');
}

// Event Bubbling einfügen



function nextPokemon(j) {
    j = (j + 1 + pokemon.length) % pokemon.length;
    openDialog(j);
}

function prevPokemon(j) {
    j = (j - 1 + pokemon.length) % pokemon.length;
    openDialog(j);
}

function loadPokemon() {
    limit + 20;
    fetchPokemon()
}