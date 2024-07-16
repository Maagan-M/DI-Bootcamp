const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const baseUrl = 'https://api.giphy.com/v1/gifs/search';

const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAllButton');

gifForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = categoryInput.value.trim();
    if (category === '') {
        alert('Please enter a category to fetch GIFs.');
        return;
    }

    try {
        const response = await fetch(`${baseUrl}?q=${category}&api_key=${apiKey}&rating=g`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayGifs(data.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        alert('Failed to fetch GIFs. Please try again later.');
    }
});

deleteAllButton.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

function displayGifs(gifs) {
    gifContainer.innerHTML = '';
    gifs.forEach(gif => {
        const gifUrl = gif.images.original.url;
        const gifTitle = gif.title;
        
        const gifCard = document.createElement('div');
        gifCard.classList.add('gifCard');
        
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = gifTitle;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            gifCard.remove();
        });
        
        gifCard.appendChild(img);
        gifCard.appendChild(deleteButton);
        
        gifContainer.appendChild(gifCard);
    });
}
