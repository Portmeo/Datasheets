import { CONSTANTS } from '@/shared/constants';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryModel, NewCategoryModel } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { NotificationService } from '@/core/notifications.service';

export const useCategoryForm = () => {
    const { id } = useParams();
    const [ category, setCategory ] = useState<any>(undefined);

    const fetchCategory = async (id:string) => {
        const response = await CategoryService.getCategory(id);
        response && setCategory(response);
    };

    const createCategory = async (category: NewCategoryModel) => {
        const response = await CategoryService.createCategory(category);
        response && processSuccess();
    };

    const updateCategory = async (category: CategoryModel) => {
        const response = await CategoryService.updateCategory(category);
        response && processSuccess();
    };

    const processSuccess = () => {
        NotificationService.new(CONSTANTS.SEVERITY_NOTIFICATION.SUCCESS,CONSTANTS.UI_STATE_MESSAGE[CONSTANTS.UI_STATE.PROCESS_SUCCESS])
    };

    useEffect(() => {
        id && fetchCategory(id);
    }, []);
    

    return {
        category,
        setCategory,
        createCategory,
        updateCategory
    }
};