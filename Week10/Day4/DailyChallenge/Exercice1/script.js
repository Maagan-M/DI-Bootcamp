const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const baseUrl = 'https://api.giphy.com/v1/gifs/random';

const gifForm = document.getElementById('gifForm');
const gifInput = document.getElementById('gifInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAllButton');

gifForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = gifInput.value;
    await fetchGif(category);
    gifInput.value = ''; // Clear the input field
});

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = ''; // Remove all GIFs from the container
});

async function fetchGif(category) {
    try {
        const response = await fetch(`${baseUrl}?api_key=${apiKey}&tag=${category}&rating=g`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        
        appendGif(gifUrl);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function appendGif(gifUrl) {
    const gifDiv = document.createElement('div');
    gifDiv.className = 'gif-item';
    
    const img = document.createElement('img');
    img.src = gifUrl;
    img.alt = 'GIF';
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.addEventListener('click', () => {
        gifDiv.remove();
    });
    
    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteButton);
    gifContainer.appendChild(gifDiv);
}
