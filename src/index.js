import express from 'express';
import componentsRouter from './routers/componentsRouter.js';

const app = express();
const port = 3000;

app.use('/components', componentsRouter);

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});