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
    categories: CategoryModel[];
    code: string;
    expenses: number;
    id: string;
    image: string;
    metals: Metals;
    weight: number;
    workmanship: Workmanship[];
}

export interface NewDatasheetModel extends Omit<DatasheetModel, 'id'>{}