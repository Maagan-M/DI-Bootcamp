const starWarsApiUrl = "https://www.swapi.tech/api/starships/9/";

async function fetchStarWarsData() {
  try {
    const response = await fetch(starWarsApiUrl);
    
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();

    console.log(data.result);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchStarWarsData();
