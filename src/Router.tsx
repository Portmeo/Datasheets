import { Navigate, useRoutes } from "react-router-dom"
import { Category } from "./features/category/Category";
import { DataSheet } from "./features/data-sheet/DataSheet";

export const Router = () => {
    return useRoutes(
        [
            {
                path: '',
                element: <Navigate to="/datasheet" />
            },
            {
                path: 'datasheet',
                element: <DataSheet />
            },
            {
                path: 'category',
                element: <Category />
            }
        ]
    );
};
