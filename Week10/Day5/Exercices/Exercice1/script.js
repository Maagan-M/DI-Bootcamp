const API_URL = 'https://www.swapi.tech/api/people/';
const randomBtn = document.getElementById('random-btn');
const loadingMessage = document.getElementById('loading');
const characterInfo = document.getElementById('character-info');
const errorMessage = document.getElementById('error-message');
const characterName = document.getElementById('character-name');
const characterHeight = document.getElementById('character-height');
const characterGender = document.getElementById('character-gender');
const characterBirthYear = document.getElementById('character-birth-year');
const characterHomeWorld = document.getElementById('character-home-world');

async function fetchCharacter(id) {
    try {
        loadingMessage.style.display = 'block';
        characterInfo.style.display = 'none';
        errorMessage.style.display = 'none';

        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
            throw new Error('Character not found');
        }

        const data = await response.json();
        const character = data.result.properties;
        
        const homeWorldResponse = await fetch(character.homeworld);
        const homeWorldData = await homeWorldResponse.json();

        displayCharacter(character, homeWorldData.result.properties.name);
    } catch (error) {
        showError();
    }
}

function displayCharacter(character, homeWorld) {
    loadingMessage.style.display = 'none';
    characterInfo.style.display = 'block';

    characterName.textContent = character.name;
    characterHeight.textContent = character.height;
    characterGender.textContent = character.gender;
    characterBirthYear.textContent = character.birth_year;
    characterHomeWorld.textContent = homeWorld;
}

function showError() {
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'block';
}

randomBtn.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 83) + 1; // There are 83 characters in the API
    fetchCharacter(randomId);
});
