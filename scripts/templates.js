function cardTemplate(pokemon, p) {
    return `<div class="card small ${pokemon.types[0]}" style="width: 18rem;" id="card${p}" onclick="openDialog(${p})">
    <img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}">
    <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">Hello Ane LOL LOL LOL LOL LOL LOL</p>
    </div>
</div>`;
}

function bigCardTemplate(pokemon, j) {
    return `
    <div class="dialog ${pokemon.types[0]}">
    <img class="big" src="${pokemon.bigImg}" class="card-img-top" alt="...">
    <h3>${pokemon.name}</h3>

    <div class="button-wrapper">    
    <button class="btn btn-dark" onclick="switch1(${j})">c1</button>
    <button class="btn btn-dark" onclick="switch2(${j})">c2</button>
    <button class="btn btn-dark" onclick="switch3(${j})">c3</button>
    </div>
    
    <div class="big-content" id="content-1-${j}">
    <h3>${pokemon.types[0]}</h3>
    </div>
    
    <div class="big-content d-none" id="content-2-${j}">
    Insert Template 2 here
    </div>
    
    <div class="big-content d-none" id="content-3-${j}">
    Insert Template 3 here
    </div>
    
    <div class="button-wrapper">    
    <button class="btn btn-dark" onclick="prevPokemon(${j})">prev</button>
    <button class="btn btn-dark" onclick="nextPokemon(${j})">next</button>
    <button class="btn btn-dark" onclick="closeOverlay()">close</button>
    </div>
    
    </div>`
}

