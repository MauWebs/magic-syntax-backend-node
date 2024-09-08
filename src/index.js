import express from 'express';
import componentsRouter from './routers/componentsRouter.js';
import devicesRouter from './routers/devicesRouter.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/components', componentsRouter);
app.use('/devices', devicesRouter);

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});