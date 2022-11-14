import { ChangeEvent } from 'react';
import { CONSTANTS } from '@shared/constants';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useCategoryForm } from '@features/category/hooks/useCategoryForm';
import { CategoryModel, NewCategoryModel } from '@features/category/models/category.model';

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
                    label={CONSTANTS.NAME}
                    value={category?.name ?? ''}
                    onChange={fieldChangeHandler(CONSTANTS.NAME)} />
            </FormControl>
            <Button variant="contained" onClick={() => id === CONSTANTS.APP.CATEGORY.NEW ? createCategory(category) : updateCategory(category)}>
                {id === CONSTANTS.NEW ? CONSTANTS.CREATE : CONSTANTS.EDIT}
            </Button>
        </Box>
  );
};
