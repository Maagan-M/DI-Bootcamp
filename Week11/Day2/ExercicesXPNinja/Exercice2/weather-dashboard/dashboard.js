import readline from 'readline';
import getWeather from './weather.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startDashboard() {
    rl.question('Enter a city name: ', (city) => {
        getWeather(city);
        rl.close();
    });
}

export default startDashboard;
