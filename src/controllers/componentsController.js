import { fetchComponents } from '../services/componentsFetch.js';

export const getComponents = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const components = await fetchComponents(token);
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching components' });
  }
};