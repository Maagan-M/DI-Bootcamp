const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

module.exports = { fetchPosts };
