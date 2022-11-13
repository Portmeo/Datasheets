import { CONSTANTS } from "@/shared/constants";
import { notificationActions } from "@/state/reducers/notification";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CategoryModel } from "../models/category.model";
import { CategoryService } from "../services/category.service";

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};


export const useCategory = () => {
    const redirect = useNavigate();
    const dispatch = useDispatch();
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [deleteCategory, setDeleteCategory] = useState<string>('');

    const fetchCategories = async () => {
        const response = await CategoryService.getCategories();
        response && setCategories(response);
    };

    const onDeleteCategory = async (id: string) => {
        const response = await CategoryService.deleteCategory(id);
        response && setCategories(prevCategories => prevCategories.filter(c => c.id !== id));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        return () => {
            dispatch(notificationActions.resetNotification()); 
        };
    });

    const actionsTable: Actions = {
        edit: {
            icon: CONSTANTS.ICONS.EDIT,
            action: (id: string) => redirect(id)
        },
        delete: {
            icon: CONSTANTS.ICONS.DELETE,
            action: (id: string) => setDeleteCategory(id)
        }
    };

    const actionsModal: Actions = {
        cancel: {           
            action: () =>  setDeleteCategory('')
        },
        confirm: {           
            action: (id: string) => onDeleteCategory(id)
        }
    };


    return {
        actionsModal,
        actionsTable,
        categories,
        deleteCategory
    }
};
