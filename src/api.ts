const API_ENDPOINT = 'https://www.omdbapi.com/';
const API_KEY = '457b6ebf';

export const api = {
  getMovies: async (keyword: string) =>
    fetch(`${API_ENDPOINT}?s=${keyword}&apikey=${API_KEY}`).then((res) => res.json()),
};
