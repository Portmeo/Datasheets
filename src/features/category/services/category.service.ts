
import { RequestHandlerService } from "@/core/requestHandler.service";
import { CONSTANTS } from "@/shared/constants";
import { CategoryModel, NewCategoryModel } from "../models/category.model";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CategoryService = {
    getCategories: (): Promise<CategoryModel[]> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`),
    getCategory: (id: string): Promise<CategoryModel> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${id}`),
    createCategory: (category: NewCategoryModel): Promise<CategoryModel> => RequestHandlerService.post(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`, { body: category }),
    updateCategory: (category: CategoryModel): Promise<CategoryModel> => RequestHandlerService.put(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${category.id}`, { body: category }),
    deleteCategory: (id: string): Promise<CategoryModel> => RequestHandlerService.delete(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}/${id}`),
}