const baseUrl = 'https://api.sunrise-sunset.org/json';

const sunriseForm = document.getElementById('sunriseForm');
const latitude1Input = document.getElementById('latitude1');
const longitude1Input = document.getElementById('longitude1');
const latitude2Input = document.getElementById('latitude2');
const longitude2Input = document.getElementById('longitude2');
const resultsDiv = document.getElementById('results');

sunriseForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const latitude1 = latitude1Input.value;
    const longitude1 = longitude1Input.value;
    const latitude2 = latitude2Input.value;
    const longitude2 = longitude2Input.value;
    
    try {
        const [result1, result2] = await Promise.all([
            fetchSunrise(latitude1, longitude1),
            fetchSunrise(latitude2, longitude2)
        ]);
        
        displayResults(result1, result2);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        resultsDiv.innerHTML = 'An error occurred. Please try again.';
    }
});

async function fetchSunrise(latitude, longitude) {
    const response = await fetch(`${baseUrl}?lat=${latitude}&lng=${longitude}&formatted=0`);
    
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    
    const data = await response.json();
    return data.results.sunrise;
}

function displayResults(sunrise1, sunrise2) {
    resultsDiv.innerHTML = `
        <h2>Sunrise Times</h2>
        <p>First City: ${new Date(sunrise1).toLocaleTimeString()}</p>
        <p>Second City: ${new Date(sunrise2).toLocaleTimeString()}</p>
    `;
}
