import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest) {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error("Specification already exists!");
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };