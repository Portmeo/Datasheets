import { Box, Button, FormControl, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useCategoryForm } from "../hooks/useCategoryForm";

interface Props {
    type: 'create' | 'edit';
};

export const CategoryForm = ({ type }: Props) => {
    const { category, setCategory, createCategory, updateCategory } = useCategoryForm();

    const fieldChangeHandler = (fieldName: string) => {
        return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const cat = {
                ...category,
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
            <Button variant="contained" onClick={() =>  type === 'edit' ? updateCategory(category) : createCategory(category)}>
                {type === 'edit' ? 'Editar' : 'Crear'}
            </Button>
        </Box>
    )
};
