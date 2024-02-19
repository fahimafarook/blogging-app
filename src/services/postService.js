import axios from 'axios';

// Define the base URL for the API
const BASE_URL = "https://api.fake-rest.refine.dev";

const postService = {
  // Make a GET request to fetch all posts from the API
  getAllPosts: () => {
    return axios.get(`${BASE_URL}/posts/`);
  },

  // Make a GET request to fetch all tags from the API
  getAllTags: () => {
    return axios.get(`${BASE_URL}/tags/`);
  },

  // Make a GET request to fetch all categories from the API
  getAllCategory: () => {
    return axios.get(`${BASE_URL}/categories/`);
  }
};

export default postService;
