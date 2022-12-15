import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
const Datasheet = lazy(() => import('./features/datasheet/Datasheet').then(m => ({ default: m.Datasheet })));
const Category = lazy(() => import('./features/category/Category').then(m => ({ default: m.Category })));
const DatasheetForm = lazy(() => import('./features/datasheet/components/datasheet-form/DatasheetForm').then(m => ({ default: m.DatasheetForm })));
const CategoryForm = lazy(() => import('./features/category/components/category-form/CategoryForm').then(m => ({ default: m.CategoryForm })));

export const Router = () => {
  return useRoutes(
    [
      {
        path: '',
        element: <Navigate to="/datasheet" />
      },
      {
        path: 'Datasheets',
        element: <Navigate to="/datasheet" />
      },
      {
        path: 'datasheet',
        element: <Datasheet />
      },
      {
        path: 'datasheet/:id',
        element: <DatasheetForm />
      },
      {
        path: 'category',
        element: <Category />
      },
      {
        path: 'category/:id',
        element: <CategoryForm />
      }
    ]
  );
};
