import { Box, Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useCategoryForm } from "../hooks/useCategoryForm";
import { CategoryModel, NewCategoryModel } from '../models/category.model';

export const CategoryForm = () => {
    const { category, setCategory, createCategory, updateCategory, id } = useCategoryForm();

    const fieldChangeHandler = (fieldName: string) => {
        return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const cat: CategoryModel | NewCategoryModel = {
                ...(category && { ...category }),
                [fieldName]: event.target.value
            };
            setCategory(cat);
        };
    };

    return (
        <Box>
            <FormControl
                fullWidth
                margin="normal">
                <TextField
                    label="Nombre"
                    value={category?.name ?? ''}
                    onChange={fieldChangeHandler('name')} />
            </FormControl>
            <Button variant="contained" onClick={() => id === 'new' ? createCategory(category) : updateCategory(category)}>
                {id === 'new' ? 'Crear' : 'Editar'}
            </Button>
        </Box>
    )
};