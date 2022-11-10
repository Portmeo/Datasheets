import { notificationActions } from "@/state/reducers/notification";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { CategoryModel } from "../models/category.model";
import { CategoryService } from "../services/category.service";

export const useCategory = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<CategoryModel[]>([]);

    const fetchCategories = async () => {
        const response = await CategoryService.getCategories();
        response && setCategories(response);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        return () => {
            dispatch(notificationActions.resetNotification()); 
        };
    });

    return {
        categories
    }
}

