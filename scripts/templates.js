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
    asd
    </div>
    
    <div class="big-content d-none" id="content-3-${j}">
    hello
    </div>
    
    <div class="button-wrapper">    
    <button class="btn btn-dark" onclick="prevPokemon(${j})">prev</button>
    <button class="btn btn-dark" onclick="nextPokemon(${j})">next</button>
    <button class="btn btn-dark" onclick="closeOverlay()">close</button>
    </div>
    
    </div>`
}

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