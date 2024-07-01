import axios from 'axios';

const userHttpClient = axios.create({
  baseURL: 'https://randomuser.me/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userHttpClient;