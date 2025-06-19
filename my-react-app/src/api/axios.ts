// src/api/axios.ts
import axios from 'axios';

export const backendApi = axios.create({
  baseURL: 'https://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
