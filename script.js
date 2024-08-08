function init() {
    fetchPokemon("");
};

const testUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchPokemon(path = "") {
    let response = await fetch(testUrl + path);
    let responseToJson = await response.json();
    renderNames(responseToJson);
}

function renderNames(response) {
    const results = response.results;
    for (let indexResults = 0; indexResults < results.length; indexResults++) {
        let content = document.getElementById('content');
        let name = results[indexResults].name;
        content.innerHTML += testTemplateBootstrap(name);
    }
}

// Loadingscreen onload body

// Es soll eine bestimmte Anzahl an Pokemon Karten direkt gerendert werden. Am besten zwischen 20 und 40.

/* Unten gibt es einen Button, um weitere 20-40 Pokemon zu laden. (Info: insgesamt gibt es über 1000 Pokemon)
    Es erscheint ein Loadingscreen (Userfeedback).
    Der Button kann während des Ladens nicht erneut angeklickt werden. 
*/

/**
Sichtbar soll auf jeder kleinen Pokemon Karte sein:
    Name
    Typ/en
    Bild des Pokemons
    Hintergrundfarbe passend zum Typ
    ID (optional)
 */

function testTemplateBootstrap(name) {
    return `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
}