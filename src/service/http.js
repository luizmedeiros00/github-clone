import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.nebula-preview+json' },
});

export default http;
