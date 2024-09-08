import axios from 'axios';
import { URL_DEVICES } from '../api/endpoints.js';

export const updateDevice = async (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    const response = await axios.put(URL_DEVICES, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    res.status(200).json(response.data);

  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.error
      ? error.response.data.error
      : 'An error occurred';

    res.status(error.response ? error.response.status : 500).json({
      message: errorMessage
    });
  }

};