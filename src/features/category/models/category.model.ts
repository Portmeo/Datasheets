export interface CategoryModel {
    id: string;
    name: string;
};

export interface NewCategoryModel extends Omit<CategoryModel, 'id'>{}