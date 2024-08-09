function init() {
    fetchTest("");
    fetchPokemon();
};

let testUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchTest(path = "") {
    let r = await fetch(testUrl + path);
    let rJson = await r.json()
    console.log(rJson);
}

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
    }
}

function renderPokemonCard() {
    for (let p = 0; p < pokemon.length; p++) {
        let content = document.getElementById('content');
        let name = pokemon[p].name;
        let img = pokemon[p].sprites.front_default;
        content.innerHTML += cardTemplate(p, name, img);
    }
}

function cardTemplate(p, name, img) {
    return `<div class="card small" style="width: 18rem;" id="card${p}" onclick="openDialog(${p})">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
    </div>
</div>`
}

//${p}, ${name}, ${img}

function openDialog(p) {
    let overlay = document.getElementById('overlay');
    overlay.classList.remove('d-none');
    let name = pokemon[p].name;
    let img = pokemon[p].sprites.front_default;
    let j = p;
    overlay.innerHTML = bigCardTemplate(j, name, img);
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.classList.add('d-none');
}

function bigCardTemplate(j, name, img) {
    return `
    <div class="test">
    <img class="big" src="${img}" class="card-img-top" alt="...">
    <h3>${name}</h3>
    <div class="button-wrapper">
    <button onclick="nextPokemon(${j})">next</button>
    <button onclick="prevPokemon(${j})">prev</button>
    <button class="x" onclick="closeOverlay()">close</button>
    </div>
    </div>`
}

function nextPokemon(j) {
    j++;
    openDialog(j);
}

function prevPokemon(j) {
    j--;
    openDialog(j);
}