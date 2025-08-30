import { useCategory } from '@/features/category/hooks/useCategory';
import { CategoryModel } from '@/features/category/models/category.model';
import { CONSTANTS } from '@/shared/constants';
import { 
  Box, Checkbox, FormControlLabel, FormGroup, Typography,
  FormControl, InputLabel, Select, MenuItem, OutlinedInput,
  useMediaQuery, useTheme, SelectChangeEvent, Chip
} from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { filtersSelect } from '@state/reducers/filters';

interface Props {
    filterAction: (id: string) => void;
};

export const FilterCategory = ({ filterAction }: Props) => {
  const { t } = useTranslation();
  const { categories } = useCategory();
  const filters = useSelector(filtersSelect);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleCheckboxChange = (event: ChangeEvent<any>) => {
    filterAction(event.target.value);
  };

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const { target: { value } } = event;
    const selectedValues = typeof value === 'string' ? value.split(',') : value;

    // Para select múltiple, necesitamos manejar diferente
    // Encontrar qué cambió comparando con el estado actual
    const currentSelection = filters.categoryFilter;
    let changedValue = '';

    if (selectedValues.length > currentSelection.length) {
      // Se agregó algo
      changedValue = selectedValues.find(v => !currentSelection.includes(v)) || '';
    } else {
      // Se quitó algo
      changedValue = currentSelection.find(v => !selectedValues.includes(v)) || '';
    }

    if (changedValue) {
      filterAction(changedValue);
    }
  };

  // Renderizado mobile: Select múltiple
  const renderMobileFilter = () => (
    <FormControl fullWidth>
      <InputLabel size="small">{t(CONSTANTS.CATEGORIES)}</InputLabel>
      <Select
        size="small"
        multiple
        value={filters.categoryFilter}
        onChange={handleSelectChange}
        input={<OutlinedInput label={t(CONSTANTS.CATEGORIES)} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((categoryId) => {
              const category = categories.find(c => c._id === categoryId);
              return (
                <Chip
                  key={categoryId}
                  label={category?.name}
                  size="small"
                  variant="outlined"
                />
              );
            })}
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300
            }
          }
        }}
      >
        {categories.map((category: CategoryModel) => (
          <MenuItem key={category._id} value={category._id}>
            <Checkbox checked={filters.categoryFilter.includes(category._id)} />
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  // Renderizado desktop: Checkboxes
  const renderDesktopFilter = () => (
    <Box display="flex" flexDirection="column">
      <Typography variant="h6" component="div" sx={{ color: '#1976D2', mb: 1 }}>
        {t(CONSTANTS.CATEGORIES)}
      </Typography>
      <FormGroup>
        {categories.map((category: CategoryModel) => (
          <FormControlLabel
            key={category._id}
            control={
              <Checkbox
                checked={filters.categoryFilter.includes(category._id)}
              />
            }
            value={category._id}
            onChange={handleCheckboxChange}
            label={category.name}
          />
        ))}
      </FormGroup>
    </Box>
  );

  return isMobile ? renderMobileFilter() : renderDesktopFilter();
};
