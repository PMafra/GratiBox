/* eslint-disable no-unused-vars */
import axios from 'axios';

const API_URL = 'http://localhost:4000';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);
const signIn = (body) => axios.post(`${API_URL}/sign-in`, body);

export { signUp, signIn };