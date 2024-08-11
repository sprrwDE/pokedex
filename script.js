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

async function fetchPokemon() {
    startLoadingAnimation();
    try {
        for (let i = limit; i < limit + 20; i++) {
            await iterateFetch(i)
        }
        renderPokemonCard();
    } catch (error) {
        console.log('Error Brudi');
    } finally {
        endLoadingAnmiation();
        console.log('Pokemon successfully fetched');
    }
}

async function iterateFetch(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let responseToJson = await response.json();
    let pokemonDetail = saveData(responseToJson);
    pokemonData.push(pokemonDetail);
}

function saveData(responseToJson) {
    let pokemonDetail = {
        name: responseToJson.name,
        img: responseToJson.sprites.other['official-artwork'].front_default,
        types: responseToJson.types.map(typeInfo => typeInfo.type.name),
        abilities: responseToJson.abilities.map(abilityInfo => abilityInfo.ability.name),
        stats: responseToJson.stats.map(statsInfo => statsInfo),
        bigImg: responseToJson.sprites.other['official-artwork'].front_default,
        id: responseToJson.id
    };
    return pokemonDetail;
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
    let pokemon = currentPokemonData[p];
    overlay.classList.remove('d-none');
    card.classList.remove('d-none');
    card.innerHTML = bigCardTemplate(pokemon, p);
    getStats(p);

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
    let btnA = document.getElementById('btn1');
    let btnB = document.getElementById('btn2')
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    btnA.classList.add('active')
    btnB.classList.remove('active')
    c1.classList.remove('d-none');
    c2.classList.add('d-none');
    c1.innerHTML = contentTemplateOne(currentPokemon, j);
    let s = j;
    getStats(s);
}

function getStats(p) {
    let currentPokemon = currentPokemonData[p];
    let content = document.getElementById(`c1-inner`);
    content.innerHTML = ""
    console.log(currentPokemon.stats)
    for (let s = 0; s < currentPokemon.stats.length; s++) {
        content.innerHTML += contentTemplateOne(currentPokemon, s);
        console.log(s);
    }
}

function switch2(j) {
    let btnA = document.getElementById("btn2");
    let btnB = document.getElementById('btn1')
    let c1 = document.getElementById(`content-1-${j}`);
    let c2 = document.getElementById(`content-2-${j}`);
    btnB.classList.remove('active')
    btnA.classList.add('active')
    c2.classList.remove('d-none');
    c1.classList.add('d-none');
    getAbilities(j);
}

function getAbilities(j) {
    let currentPokemon = currentPokemonData[j];
    let content = document.getElementById(`c2-inner`);
    content.innerHTML = ""
    for (let a = 0; a < currentPokemon.abilities.length; a++) {
        content.innerHTML += contentTemplateTwo(currentPokemon, a);
    }
}

function nextPokemon(j) {
    j = (j + 1 + currentPokemonData.length) % currentPokemonData.length;
    openDialog(j);
}

function prevPokemon(j) {
    j = (j - 1 + currentPokemonData.length) % currentPokemonData.length;
    openDialog(j);
}

/**
 * Loading Functions
 */

function loadPokemon() {
    currentPokemonData = pokemonData;
    limit += 20;
    fetchPokemon()
}

function startLoadingAnimation() {
    let overlay = document.getElementById('overlay-loading');
    overlay.classList.remove('d-none');
}

function endLoadingAnmiation() {
    let overlay = document.getElementById('overlay-loading');
    overlay.classList.add('d-none');
}