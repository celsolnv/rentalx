import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute() {
    const allCategories = this.categoriesRepository.list();
    return allCategories;
  }
}

export { ListCategoriesUseCase };
