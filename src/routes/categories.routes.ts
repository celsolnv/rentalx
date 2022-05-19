import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.sendStatus(201);
});

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.send(allCategories);
});

export { categoriesRoutes };
