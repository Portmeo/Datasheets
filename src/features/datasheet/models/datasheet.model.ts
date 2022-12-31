import { CategoryModel } from '@features/category/models/category.model';

export interface MetalData {
    price: number;
}

export interface Metals {
    silver: MetalData;
    gold?: MetalData;
}

export interface Workmanship {
    name: string;
    value: number;
}

export interface DatasheetModel {
    _id: string;
    categories: CategoryModel[] | string[];
    code: string;
    name: string;
    model: string;
    description: string;
    expenses: number;
    image: string;
    metals: Metals;
    weight: number;
    workmanship: Workmanship[];
}

export interface NewDatasheetModel extends Omit<DatasheetModel, 'id'>{}
