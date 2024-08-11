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

// Wie kürzen? Json
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
    let card = document.getElementById('big-card')
    overlay.classList.remove('d-none');
    card.classList.remove('d-none');
    let pokemon = pokemonData[p]; 
    card.innerHTML = bigCardTemplate(pokemon, p);
    // Event Bubbling stop Propagation
    overlay.addEventListener("click", () => {
        overlay.classList.add('d-none');
    })
    card.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add('d-none');
}

/**
 * Switch Functions inside Cards
 */

function switch1(j) {
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c1.classList.remove('d-none');
    c2.classList.add('d-none');
    c3.classList.add('d-none');
}

function switch2(j) {
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c2.classList.remove('d-none');
    c1.classList.add('d-none');
    c3.classList.add('d-none');
}

function switch3(j) {
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c3.classList.remove('d-none');
    c1.classList.add('d-none');
    c2.classList.add('d-none');
}

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