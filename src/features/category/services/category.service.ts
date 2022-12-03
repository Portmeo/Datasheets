
import { RequestHandlerService } from '@core/requestHandler.service';
import { CONSTANTS } from '@shared/constants';
import { CategoryModel, NewCategoryModel } from '@features/category/models/category.model';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CategoryService = {
  getAll: (): Promise<CategoryModel[]> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`),
  get: (id: string): Promise<CategoryModel> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${id}`),
  create: (category: NewCategoryModel): Promise<CategoryModel> => RequestHandlerService.post(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`, { body: category }),
  update: (category: CategoryModel): Promise<CategoryModel> => RequestHandlerService.put(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${category._id}`, { body: category }),
  delete: (id: string): Promise<CategoryModel> => RequestHandlerService.delete(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${id}`)
};
