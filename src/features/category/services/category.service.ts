
import { RequestHandlerService } from "@/core/requestHandler.service";
import { CONSTANTS } from "@/shared/constants";
import { CategoryModel } from "../models/category.model";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const CategoryService = {
    getCategories: (): Promise<CategoryModel[]> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.CATEGORY}`)
}