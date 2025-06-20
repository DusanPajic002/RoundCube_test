import axios from 'axios'; 
import { BACK_API_BASE } from '../constants/endpoints';

export const backendApi = axios.create({
    baseURL: BACK_API_BASE,
});

console.log(`Axios instance created with base URL: ${BACK_API_BASE}`);
