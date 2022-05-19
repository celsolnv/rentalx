import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.send(allCategories);
});

export { categoriesRoutes };
