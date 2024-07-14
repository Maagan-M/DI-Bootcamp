const getCharacterBtn = document.getElementById('get-character-btn');
const characterInfo = document.getElementById('character-info');
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const characterData = document.getElementById('character-data');
const nameElement = document.getElementById('name');
const heightElement = document.getElementById('height');
const genderElement = document.getElementById('gender');
const birthYearElement = document.getElementById('birth-year');
const homeWorldElement = document.getElementById('home-world');

getCharacterBtn.addEventListener('click', getRandomCharacter);

function getRandomCharacter() {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    characterData.style.display = 'none';

    fetch('https://www.swapi.tech/')
        .then(response => response.json())
        .then(data => {
            const character = data.result.properties;
            displayCharacterInfo(character);
        })
        .catch(error => {
            console.error(error);
            errorMessage.style.display = 'block';
        })
        .finally(() => {
            loadingMessage.style.display = 'none';
        });
}

function displayCharacterInfo(character) {
    nameElement.textContent = `Name: ${character.name}`;
    heightElement.textContent = `Height: ${character.height} cm`;
    genderElement.textContent = `Gender: ${character.gender}`;
    birthYearElement.textContent = `Birth Year: ${character.birth_year}`;
    homeWorldElement.textContent = `Home World: ${character.homeworld}`;

    characterData.style.display = 'block';
}