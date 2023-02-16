import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { CONSTANTS } from './shared/constants';
import { UserModel } from './state/models/main-state';
const Datasheet = lazy(() => import('./features/datasheet/Datasheet').then(m => ({ default: m.Datasheet })));
const Category = lazy(() => import('./features/category/Category').then(m => ({ default: m.Category })));
const DatasheetForm = lazy(() => import('./features/datasheet/components/datasheet-form/DatasheetForm').then(m => ({ default: m.DatasheetForm })));
const CategoryForm = lazy(() => import('./features/category/components/category-form/CategoryForm').then(m => ({ default: m.CategoryForm })));
const Login = lazy(() => import('./features/authentication/Login').then(m => ({ default: m.Login })));

interface Props {
  user: UserModel;
};

export const Router = ({ user }: Props) => {
  return useRoutes(
    [
      {
        path: '/',
        element: <Navigate to="/login" />
      },
      {
        path: 'login',
        element: user ? <Navigate to="/datasheet" /> : <Login />
      },
      {
        path: 'datasheet',
        element: user ? <Datasheet /> : <Navigate to="/login" />
      },
      {
        path: 'datasheet/:id',
        element: user?.role === CONSTANTS.ROLES.GUEST ? <Navigate to="/login" /> : <DatasheetForm />
      },
      {
        path: 'category',
        element: user?.role === CONSTANTS.ROLES.GUEST ? <Navigate to="/login" /> : <Category />
      },
      {
        path: 'category/:id',
        element: user?.role === CONSTANTS.ROLES.GUEST ? <Navigate to="/login" /> : <CategoryForm />
      }
    ]
  );
};
