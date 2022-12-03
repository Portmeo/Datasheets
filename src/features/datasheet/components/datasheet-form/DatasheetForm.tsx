import { ChangeEvent } from 'react';
import { CONSTANTS } from '@shared/constants';
import { useDatasheetForm } from '@features/datasheet/hooks/useDatasheetForm';
import { DatasheetModel, NewDatasheetModel, Workmanship } from '@features/datasheet/models/datasheet.model';
import {
  Box, Button, CardMedia, FormControl, InputLabel, IconButton,
  MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography
} from '@mui/material';
import imageNotFound from '@assets/images/imageNotFound.jpg';
import './DatasheetForm.css';

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
    categoryOptions, categorySelect, setCategorySelect, workmanship, setWorkmanship,
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
            [field]: +event.target.value
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

  const handlerDeleteWorkmanship = (name: string) => {
    const data = {
      ...datasheet,
      workmanship: datasheet.workmanship.filter((work: Workmanship) => work.name !== name)
    };
    setDatasheet(data);
  };

  const handlerAddWorkmanship = (field: string) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const data = {
        ...workmanship,
        [field]: field === 'value' ? +event.target.value : event.target.value
      };
      setWorkmanship(data);
    };
  };

  const handlerWorkmanship = () => {
    const newWorkmanship = datasheet.workmanship ? [...datasheet.workmanship, workmanship] : [workmanship];
    const data = {
      ...datasheet,
      workmanship: newWorkmanship
    };
    setWorkmanship({ name: '', value: 0 });
    setDatasheet(data);
  };

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const handlerImage = async (event: any) => {
    const file = event.target.files[0];
    const fileB64 = await toBase64(file);
    const data = {
      ...datasheet,
      image: fileB64
    };
    setDatasheet(data);
  };

  return (
    <Box>
      <Box
        display='flex'
        justifyContent='space-between'
        sx={{ gap: 2 }}
      >
        <Box
          display='flex'
          sx={{ mt: 2, flexDirection: 'column', alignItems: 'center' }}>
          <CardMedia
            sx={{ width: 300, height: 300 }}
            component="img"
            image={datasheet?.image ?? imageNotFound}
            alt="img"
          />
          <FormControl
            margin="normal">
            <TextField
              size="small"
              type='file'
              onChange={handlerImage} />
          </FormControl>
        </Box>
        <Box sx={{ mt: 1, width: '30%' }}>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label='Código'
              value={datasheet?.code?.toUpperCase() ?? ''}
              onChange={handlerField('code')} />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal">
            <InputLabel size="small" id="category-label">Category</InputLabel>
            <Select
              size="small"
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
                  key={category._id}
                  value={category._id}
                >
                  {category.name.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{ width: '49%', mr: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label='expenses'
              value={datasheet?.expenses ?? ''}
              onChange={handlerField('expenses')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label='weight'
              value={datasheet?.weight ?? ''}
              onChange={handlerField('weight')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', mr: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label='Plata'
              value={datasheet?.metals?.silver?.price ?? ''}
              onChange={handleMetalsField('silver.price')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label='Oro'
              value={datasheet?.metals?.gold?.price ?? ''}
              onChange={handleMetalsField('gold.price')} />
          </FormControl>
        </Box>
        <Box sx={{ mt: 1, width: '35%' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976D2' }} >TRABAJOS</Typography>
          <Box
            display='flex'
            justifyContent='space-between'>
            <Box
              display='flex'
              justifyContent='space-between'
              sx={{ width: '90%' }}>
              <FormControl
                sx={{ width: '49%' }}
                margin="normal">
                <TextField
                  size="small"
                  label='Work'
                  value={workmanship.name}
                  onChange={handlerAddWorkmanship('name')} />
              </FormControl>
              <FormControl
                sx={{ width: '49%' }}
                margin="normal"
                size="small">
                <TextField
                  size="small"
                  label='Value'
                  type='number'
                  value={workmanship.value}
                  onChange={handlerAddWorkmanship('value')} />
              </FormControl>
            </Box>

            <IconButton
              disabled={!workmanship.name || !workmanship.value}
              sx={{ width: '10%' }}
              onClick={handlerWorkmanship}>
              {CONSTANTS.ICONS.ADD}
            </IconButton>
          </Box>
          {
            datasheet?.workmanship?.map((work: Workmanship) => (
              <Box
                display='flex'
                align-item='center'
                key={work.name}>
                <Box className='row'>
                  <Box className='column'>
                    {work.name}
                  </Box>
                  <Box className='column text-rigth'>
                    {work.value}
                  </Box>
                </Box>
                <IconButton key={work.name} sx={{ padding: 0, mb: '10px', width: '10%' }} onClick={() => handlerDeleteWorkmanship(work.name)}>
                  {CONSTANTS.ICONS.DELETE}
                </IconButton>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          disabled={!datasheet}
          sx={{ mt: 1 }}
          variant="contained"
          onClick={() => id?.toUpperCase() === CONSTANTS.NEW.toUpperCase() ? createDatasheet(datasheet) : updateDatasheet(datasheet)}>
          {id?.toUpperCase() === CONSTANTS.NEW.toUpperCase() ? CONSTANTS.CREATE : CONSTANTS.EDIT}
        </Button>
      </Box>
    </Box >
  );
};
