import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryModel, NewCategoryModel } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { AlertService } from '@/core/alert.service';

export const useCategoryForm = () => {
    const { id } = useParams();
    const [category, setCategory] = useState<any>();

    const fetchCategory = async (id: string) => {
        const response = await CategoryService.getCategory(id);
        response && setCategory(response);
    };

    const createCategory = async (category: NewCategoryModel) => {
        const response = await CategoryService.createCategory(category);
        if (response) {
            processSuccess();
            setCategory(undefined);
        }
    };

    const updateCategory = async (category: CategoryModel) => {
        const response = await CategoryService.updateCategory(category);
        response && processSuccess();
    };

    const processSuccess = () => {
        AlertService.proccesSuccess();
    };

    useEffect(() => {
        id && id !== 'new' && fetchCategory(id);
    }, []);

    useEffect(() => {
        return () => {
            AlertService.reset();
        };
    });


    return {
        category,
        setCategory,
        createCategory,
        updateCategory,
        id
    }
};