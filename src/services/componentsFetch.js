// componenetsFetch //
import axios from 'axios';
import { URL_COMPONENTS } from '../api/endpoints.js';

export async function fetchComponents(token) {
  try {
    const response = await axios.get(URL_COMPONENTS, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}