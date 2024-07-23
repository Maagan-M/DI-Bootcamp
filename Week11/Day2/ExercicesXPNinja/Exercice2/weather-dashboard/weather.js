import axios from 'axios';
import chalk from 'chalk';

const API_KEY = '517545a601062b9c9ce2e3b722cf257f';

async function getWeather(city) {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weather = response.data;
        const temperature = weather.main.temp;
        const description = weather.weather[0].description;
        console.log(chalk.blue(`The weather in ${city} is ${description} with a temperature of ${temperature}°C.`));
    } catch (error) {
        console.error(chalk.red('Error fetching weather data:', error));
    }
}

export default getWeather;
