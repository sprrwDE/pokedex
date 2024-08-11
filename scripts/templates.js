function cardTemplate(pokemon, p) {
    return `
    <div class="card small ${pokemon.types[0]}" style="width: 18rem;" id="card${p}" onclick="openDialog(${p})">
        <div class="type-wrapper-small">
            <div class="type-wrapper-inner">
                <div class="type-img ${pokemon.types[0]}img">
                    <img class="type-img" src="assets/icons/types/${pokemon.types[0]}.svg">
                </div>
                ${pokemon.types[1] ? `
                <div class="type-img ${pokemon.types[1]}img">
                    <img class="type-img" src="assets/icons/types/${pokemon.types[1]}.svg">
                </div>
                ` : ''}
            </div>
            <h3 class="light">#${pokemon.id}</h3>
        </div>
        <img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}">
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
        </div>
    </div>`;
}

function bigCardTemplate(pokemon, j) {
    return `
    <div class="dialog ${pokemon.types[0]}">
        <img class="big" src="${pokemon.bigImg}" class="card-img-top" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <div class="type-wrapper-big">
            <div class="type-img ${pokemon.types[0]}img">
                <img class="type-img" src="assets/icons/types/${pokemon.types[0]}.svg">
            </div>
            ${pokemon.types[1] ? `
            <div class="type-img ${pokemon.types[1]}img">
                <img class="type-img" src="assets/icons/types/${pokemon.types[1]}.svg">
            </div>
            ` : ''}
        </div>
        <div class="big-content-wrapper">
            <div class="button-wrapper bigcard">    
                <button class="btn btn-dark stretch" onclick="switch1(${j})">c1</button>
                <button class="btn btn-dark stretch" onclick="switch2(${j})">c2</button>
                <button class="btn btn-dark stretch" onclick="switch3(${j})">c3</button>
            </div>
            
            <div class="big-content" id="content-1-${j}">
                ${contentTemplateOne(pokemon)}
            </div>
            
            <div class="big-content d-none" id="content-2-${j}">
                ${contentTemplateTwo(pokemon)}
            </div>
            
            <div class="big-content d-none" id="content-3-${j}">
                ${contentTemplateThree(pokemon)}
            </div>
            
            <div class="button-wrapper bigcard">    
                <button class="btn btn-dark stretch" onclick="prevPokemon(${j})">prev</button>
                <button class="btn btn-dark stretch" onclick="nextPokemon(${j})">next</button>
                <button class="btn btn-dark stretch" onclick="closeOverlay()">close</button>
            </div>   
        </div>
    </div>`;
}

function contentTemplateOne(pokemon) {
    return ` 
    <h3>Stats</h3>
    <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:100%">hello</div>
    </div>
    `
}

function contentTemplateTwo(pokemon) {
    return `
        <h3>Abilities</h3>
    `
}

function contentTemplateThree(pokemon) {
    return `
    <h3>Was auch immer</h3>
    `
}