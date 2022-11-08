import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const DataSheet = lazy(() => import('./features/data-sheet/DataSheet').then(m => ({default: m.DataSheet})));
const Category = lazy(() => import('./features/category/Category').then(m => ({default: m.Category})));

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
