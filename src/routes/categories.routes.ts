import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, numbleTable, kit, value } = request.body;

  categories.push({
    name,
    numbleTable,
    kit,
    value,
  });
  return response.status(201).send();
});

export { categoriesRoutes };
