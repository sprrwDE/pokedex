function init() {
    fetchTest("");
};

const testUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchTest(path = "") {
    let response = await fetch(testUrl + path);
    let responseToJson = await response.json();
    renderTest(responseToJson);
}

function renderTest(response){
    const results = response.results;
    for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
    }
}