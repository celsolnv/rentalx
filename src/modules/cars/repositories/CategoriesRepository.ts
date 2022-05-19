import { Category } from "../model/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository implements ICategoriesRepository {
  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoryRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }
  create({ description, name }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find((category) => name === category.name);

    return category;
  }
}

export { CategoryRepository };
