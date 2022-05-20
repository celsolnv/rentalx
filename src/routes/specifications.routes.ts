import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  createCategoryController.handle(req, res);
});

export { specificationRoutes };
