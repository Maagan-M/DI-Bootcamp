const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemonId = null;

document.getElementById('random-btn').addEventListener('click', fetchRandomPokemon);
document.getElementById('prev-btn').addEventListener('click', fetchPreviousPokemon);
document.getElementById('next-btn').addEventListener('click', fetchNextPokemon);

async function fetchPokemon(id) {
    try {
        document.getElementById('loading').style.display = 'block';
        const response = await fetch(`${BASE_URL}${id}`);
        if (!response.ok) throw new Error("Pokemon not found");
        const data = await response.json();
        displayPokemon(data);
        document.getElementById('loading').style.display = 'none';
    } catch (error) {
        showError(error.message);
        document.getElementById('loading').style.display = 'none';
    }
}

function displayPokemon(data) {
    currentPokemonId = data.id;
    document.getElementById('pokemon-info').style.display = 'block';
    document.getElementById('pokemon-image').src = data.sprites.front_default;
    document.getElementById('pokemon-name').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.getElementById('pokemon-id').textContent = `ID: ${data.id}`;
    document.getElementById('pokemon-height').textContent = `Height: ${data.height / 10} m`;
    document.getElementById('pokemon-weight').textContent = `Weight: ${data.weight / 10} kg`;
    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    document.getElementById('pokemon-type').textContent = `Type: ${types}`;
    document.getElementById('error-message').textContent = '';
}

function showError(message) {
    document.getElementById('error-message').textContent = `Oh no! ${message}`;
}

async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon range from 1 to 898
    await fetchPokemon(randomId);
}

async function fetchPreviousPokemon() {
    if (currentPokemonId > 1) {
        await fetchPokemon(currentPokemonId - 1);
    } else {
        showError('This is the first Pokémon.');
    }
}

async function fetchNextPokemon() {
    const nextId = currentPokemonId ? currentPokemonId + 1 : 1;
    await fetchPokemon(nextId);
}

fetchRandomPokemon();
