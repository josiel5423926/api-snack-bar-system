import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, numbleTable, kit, value } = request.body;
  const category = {
    name,
    numbleTable,
    kit,
    value,
    id: uuidV4(),
  };
  categories.push({ category });
  return response.status(201).send();
});

export { categoriesRoutes };
