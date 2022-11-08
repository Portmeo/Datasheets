import { Get } from "@/core/requestHandler";
import { CONSTANTS } from "@/shared/constants";
import { CategoryModel } from "../models/category.model";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CategoryService = {
    getCategories: (): Promise<CategoryModel[]> => Get(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`)
}