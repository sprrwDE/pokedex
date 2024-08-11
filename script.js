function init() {
    fetchPokemon();
    currentPokemonData = pokemonData;
    console.log(currentPokemonData);
};

/**
 * Data
 */

let limit = 1;
let pokemonData = [];
let currentPokemonData = [];

/**
 * Fetch Pokemon and Render Content
 */

// Wie kürzen? Json auslagern?
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
                bigImg: responseToJson.sprites.other['official-artwork'].front_default,
                id: responseToJson.id
            };
            pokemonData.push(pokemonDetail);
            console.log(responseToJson)
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
    for (let p = 0; p < currentPokemonData.length; p++) {
        let pokemon = currentPokemonData[p]; 
        content.innerHTML += cardTemplate(pokemon, p); 
    }
}

/**
 * Filter
 */

function filter() {
    let input = document.getElementById('filter').value;
    if (input === "") {
        currentPokemonData = pokemonData.slice()
        renderPokemonCard();
    } else if (input.length < 3) {
        alert('bitte geben Sie mindestens 3 Buchstaben ein') 
    } else {
    let filteredPokemonData = currentPokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(input));
    currentPokemonData = filteredPokemonData.slice(0, 10);
    renderPokemonCard();
    }
}

function reset() {
    currentPokemonData = pokemonData.slice();
    renderPokemonCard();
}

function sortName() {
    currentPokemonData = pokemonData.slice();
    currentPokemonData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    console.log(currentPokemonData);
    renderPokemonCard(currentPokemonData);
}

function sortType() {
    currentPokemonData = pokemonData.slice();
    currentPokemonData.sort((a, b) => {
        if (a.types[0] < b.types[0]) return -1;
        if (a.types[0] > b.types[0]) return 1;
        return 0;
    });
    console.log(currentPokemonData);
    renderPokemonCard(currentPokemonData);
}

/**
 * Open Big Pokemon Cards and Overlay
 */

function openDialog(p) {
    let overlay = document.getElementById('overlay');
    let card = document.getElementById('big-card')
    overlay.classList.remove('d-none');
    card.classList.remove('d-none');
    let pokemon = currentPokemonData[p]; 
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
    let currentPokemon = currentPokemonData[j]; 
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c1.classList.remove('d-none');
    c2.classList.add('d-none');
    c3.classList.add('d-none');
    c1.innerHTML = contentTemplateOne(currentPokemon, j);
}

function switch2(j) {
    let currentPokemon = currentPokemonData[j]; 
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c2.classList.remove('d-none');
    c1.classList.add('d-none');
    c3.classList.add('d-none');
    c2.innerHTML = contentTemplateTwo(currentPokemon, j);
}

function switch3(j) {
    let currentPokemon = currentPokemonData[j]; 
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    let c3 = document.getElementById(`content-3-${j}`);
    c3.classList.remove('d-none');
    c1.classList.add('d-none');
    c2.classList.add('d-none');
    c3.innerHTML = contentTemplateThree(currentPokemon, j);
}

function nextPokemon(j) {
    j = (j + 1 + currentPokemonData.length) % currentPokemonData.length; 
    openDialog(j);
}

function prevPokemon(j) {
    j = (j - 1 + currentPokemonData.length) % currentPokemonData.length; 
    openDialog(j);
}

function loadPokemon() {
    currentPokemonData = pokemonData;
    limit += 20;
    fetchPokemon()
}

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