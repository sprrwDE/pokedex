function cardTemplate(pokemon, p) {
    return `<div class="card small ${pokemon.types[0]}" style="width: 18rem;" id="card${p}" onclick="openDialog(${p})">
    <img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>`;
}

function bigCardTemplate(pokemon, j) {
    return `
    <div class="dialog ${pokemon.types[0]}">
    <img class="big" src="${pokemon.bigImg}" class="card-img-top" alt="...">
    <h3>${pokemon.name}</h3>
    <h3>${pokemon.types[0]}</h3>
    <div class="button-wrapper">    
    <button onclick="prevPokemon(${j})">prev</button>
    <button onclick="nextPokemon(${j})">next</button>
    <button onclick="closeOverlay()">close</button>
    </div>
    </div>`
}