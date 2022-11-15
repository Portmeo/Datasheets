import { ChangeEvent } from 'react';
import { CONSTANTS } from '@shared/constants';
import { useDatasheetForm } from '@features/datasheet/hooks/useDatasheetForm';
import { DatasheetModel, NewDatasheetModel } from '@features/datasheet/models/datasheet.model';
import { Box, Button, CardMedia, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material';
import imageNotFound from '@assets/images/imageNotFound.jpg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export const DatasheetForm = () => {
  const {
    categoryOptions, categorySelect, setCategorySelect,
    datasheet, setDatasheet, createDatasheet, updateDatasheet, id
  } = useDatasheetForm();

  const handlerField = (fieldName: string) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data: DatasheetModel | NewDatasheetModel = {
        ...(datasheet && { ...datasheet }),
        [fieldName]: event.target.value
      };
      setDatasheet(data);
    };
  };

  const handleMetalsField = (fieldName: string) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const [metal, field] = fieldName.split('.');
      const data = {
        ...datasheet,
        metals: {
          ...datasheet.metals,
          [metal]: {
            ...datasheet.metals[metal],
            [field]: event.target.value
          }
        }
      };
      setDatasheet(data);
    };
  };

  const handleCategorySelect = (event: SelectChangeEvent<typeof categorySelect>) => {
    const { target: { value } } = event;
    const data = {
      ...datasheet,
      categories: value
    };
    setDatasheet(data);
    setCategorySelect(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box>
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <CardMedia
          sx={{ p: 1, maxWidth: 350 }}
          component="img"
          image={datasheet?.image ?? imageNotFound}
          alt="img"
        />
        <Box>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              label='Código'
              value={datasheet?.code ?? ''}
              onChange={handlerField('code')} />
          </FormControl>
          <FormControl
            fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              multiple
              value={categorySelect}
              onChange={handleCategorySelect}
              input={<OutlinedInput label="Category" />}
              MenuProps={MenuProps}
            >
              {categoryOptions.map(category => (
                <MenuItem
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{ width: '49%', mr: '1%' }}
            margin="normal">
            <TextField
              label='expenses'
              value={datasheet?.expenses ?? ''}
              onChange={handlerField('expenses')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              label='weight'
              value={datasheet?.weight ?? ''}
              onChange={handlerField('weight')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', mr: '1%' }}
            margin="normal">
            <TextField
              label='Plata'
              value={datasheet?.metals.silver.price ?? ''}
              onChange={handleMetalsField('silver.price')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              label='Oro'
              value={datasheet?.metals.gold.price ?? ''}
              onChange={handleMetalsField('gold.price')} />
          </FormControl>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button sx={{ mt: 1 }} variant="contained" onClick={() => id === CONSTANTS.NEW ? createDatasheet(datasheet) : updateDatasheet(datasheet)}>
          {id === CONSTANTS.NEW ? CONSTANTS.CREATE : CONSTANTS.EDIT}
        </Button>
      </Box>
    </Box>
  );
};
