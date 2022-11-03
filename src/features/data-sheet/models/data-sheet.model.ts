import { Category } from "@/features/category/models/category.model";

export interface DataSheets {
    dataSheets: DataSheet[];
}

export interface DataSheet {
    _id: string;
    image: string;
    code: string;
    category: Category;
    expenses: number;
    weight: number;
    metals: Metals;
    workmanship: Workmanship[];
}

export interface Metals {
    silver: MetalData;
    gold?: MetalData;
}

export interface MetalData {
    price: number;
}

export interface Workmanship {
    name: string;
    value: number;
}
