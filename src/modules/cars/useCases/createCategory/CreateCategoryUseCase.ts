import { CategoryRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}
  execute({ name, description }: IRequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExist) {
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryUseCase };
