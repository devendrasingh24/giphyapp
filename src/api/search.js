import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

const getSearchUrl = (q, limit, offset, apiKey = "") => {
  return `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;
};

export const searchRequest = async (text, limit = 25, offset = 0) => {
  const response = await axios.get(getSearchUrl(text, limit, offset, REACT_APP_API_KEY));
  if (response.status >= 400) {
    throw new Error(response.statusText);
  }
  
  return response.data;
};