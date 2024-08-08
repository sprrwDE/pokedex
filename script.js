function init() {
    fetchTest("");
};

const testUrl = "https://pokeapi.co/api/v2/pokemon/";

async function fetchTest(path = "") {
    let response = await fetch(testUrl + path);
    let responseToJson = response.json();
    console.log(responseToJson)
}