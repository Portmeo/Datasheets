import { useEffect, useState } from "react"
import { CategoryModel } from "../models/category.model";
import { CategoryService } from "../services/category.service";

export const useCategory = () => {

    const [categories, setCategories] = useState<CategoryModel[]>([]);

    const fetchCategories = async () => {
        const response = await CategoryService.getCategories();
        response && setCategories(response);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return {
        categories
    }
}

