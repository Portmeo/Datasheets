import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS } from '@shared/constants';
import { AlertService } from '@core/alert.service';
import { CategoryModel } from '@features/category/models/category.model';
import { CategoryService } from '@features/category/services/category.service';

interface Actions {
    [key: string]: {
        icon?: JSX.Element,
        action: (...params: any) => void
    }
};

export const useCategory = () => {
  const redirect = useNavigate();
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [deleteCategory, setDeleteCategory] = useState<string>('');

  const fetchCategories = async () => {
    const response = await CategoryService.getAll();
    response && setCategories(response);
  };

  const onDeleteCategory = async (id: string) => {
    const response = await CategoryService.delete(id);
    if (response) {
      setCategories(prevCategories => prevCategories.filter(c => c._id !== id));
      setDeleteCategory('');
    }
  };

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
      action: () => setDeleteCategory('')
    },
    confirm: {
      action: (id: string) => onDeleteCategory(id)
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    return () => {
      AlertService.reset();
    };
  });

  return {
    actionsModal,
    actionsTable,
    categories,
    deleteCategory
  };
};
