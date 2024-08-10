function cardTemplate(p, name, img, type) {
    return `<div class="card small ${type[0]}" style="width: 18rem;" id="card${p}" onclick="openDialog(${p})">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
    </div>
</div>`
}

function bigCardTemplate(j, name, img, type) {
    return `
    <div class="test ${type[0]}">
    <img class="big" src="${img}" class="card-img-top" alt="...">
    <h3>${name}</h3>
    <div class="button-wrapper">    
    <button onclick="prevPokemon(${j})">prev</button>
    <button onclick="nextPokemon(${j})">next</button>
    <button class="x" onclick="closeOverlay()">close</button>
    </div>
    </div>`
}