import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'WEdozSbeL3sXHgKKf2QSFIABrvu5qfELDXJLSJNUh8Q';

export const fetchImages = async (query, page, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: { query, page, per_page: perPage },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  console.log(response);
  console.log('Response data:', response.data);
  console.log('Results:', response.data.results);

  return response.data.results;
};
