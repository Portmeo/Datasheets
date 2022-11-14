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
    id: string;
    image: string;
    code: string;
    category: CategoryModel;
    expenses: number;
    weight: number;
    metals: Metals;
    workmanship: Workmanship[];
}

export interface NewDatasheetModel extends Omit<DatasheetModel, 'id'>{}
