function init() {
    fetchPokemon();
};

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
        console.log(pokemon);
    } catch (error) {
        console.log('Error Brudi');
    }
}

/* unction getPokomonNames(response) {
    const results = response.results;
    console.log(results);
    for (let indexResults = 0; indexResults < results.length; indexResults++) {
        let content = document.getElementById('content');
        let name = results[indexResults].name;
        content.innerHTML += testTemplateBootstrap(name);
        console.log(name);
    }
}
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