import axios from 'axios';
import { URL_COMPONENTS } from '../api/endpoints.js';

export const getComponents = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const response = await axios.get(URL_COMPONENTS, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching components' });
  }
};