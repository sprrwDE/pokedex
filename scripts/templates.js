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
                <button class="btn btn-dark stretch active" onclick="switch1(${j})" id="btn1">Stats</button>
                <button class="btn btn-dark stretch" onclick="switch2(${j})" id="btn2">Abilities</button>
            </div>
            
            <div class="big-content" id="content-1-${j}">
                <h3>Stats</h3>
                <div id="c1-inner">
                </div>
            </div>
            
            <div class="big-content d-none" id="content-2-${j}">
                    <h3>Abilities</h3>
                    <div id="c2-inner">
                    </div>
            </div>
            
            <div class="button-wrapper bigcard">    
                <button class="btn btn-dark stretch" onclick="prevPokemon(${j})">prev</button>
                <button class="btn btn-dark stretch" onclick="nextPokemon(${j})">next</button>
                <button class="btn btn-dark stretch" onclick="closeOverlay()">close</button>
            </div>   
        </div>
    </div>`;
}

function contentTemplateOne(currentPokemon, a) {
    return ` 
    <div class="progress">
    <p class="progress-text">${currentPokemon.stats[a].stat.name}</p>
        <div class="progress-bar ${currentPokemon.types[0]}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:${currentPokemon.stats[a].base_stat}%"></div>
    </div>
    `
}

function contentTemplateTwo(pokemon, a) {
    return `
    - ${pokemon.abilities[a]}<br>
    `
}