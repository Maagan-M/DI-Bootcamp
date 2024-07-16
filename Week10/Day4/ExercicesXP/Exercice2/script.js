const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchQuery = 'sun';
const rating = 'g';
const limit = 10;
const offset = 2;

const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&rating=${rating}&api_key=${apiKey}&limit=${limit}&offset=${offset}`;

fetch(giphyApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
