export interface CategoryModel {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
};

export interface NewCategoryModel extends Omit<CategoryModel, 'id'>{}
