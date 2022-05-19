import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecification = new CreateSpecificationService(
    specificationRepository
  );

  createSpecification.execute({ name, description });

  return res.sendStatus(201);
});

export { specificationRoutes };
