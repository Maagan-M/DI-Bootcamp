import axios from 'axios';

async function fetch() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default fetch;
