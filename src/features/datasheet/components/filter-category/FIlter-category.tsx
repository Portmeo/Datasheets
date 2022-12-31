import { useCategory } from '@/features/category/hooks/useCategory';
import { CategoryModel } from '@/features/category/models/category.model';
import { CONSTANTS } from '@/shared/constants';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    filterAction: (id: string) => void;
};

export const FilterCategory = ({ filterAction }: Props) => {
  const { t } = useTranslation();
  const { categories } = useCategory();

  const handleChange = (event: ChangeEvent<any>) => {
    filterAction(event.target.value);
  };

  return (
    <>
        <Box
            display="flex"
            flexDirection="column">
            <Typography variant="h6" component="div" sx={{ color: '#1976D2' }} >{t(CONSTANTS.CATEGORIES)}</Typography>
            <FormGroup>
                {
                    categories.map((category: CategoryModel) => (
                        <FormControlLabel
                            key={category._id}
                            control={<Checkbox />}
                            value={category._id}
                            onChange={handleChange}
                            label={category.name}
                        />
                    ))
                }
            </FormGroup>
        </Box>
    </>
  );
};
