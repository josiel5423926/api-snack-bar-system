import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());
app.use('/categories', categoriesRoutes);

/* app.get('/', (request, response) => {
  return response.json({ message: 'hello world! Josiel' });
});

app.post('/kit', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
}); */

app.listen(3333, () => console.log('server rodando '));
