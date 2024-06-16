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
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '@/shared/utils/format.utils';
import { TableCardDatasheet } from '../table-card-datasheet/Table-card-datasheet';

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
  const { t } = useTranslation();
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
        [field]: field === 'value' ? event.target.value : capitalizeFirstLetter(event.target.value.toLowerCase())
      };
      setWorkmanship(data);
    };
  };

  const handlerEditWorkmanship = (index: number) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const editWorkmanship = datasheet.workmanship;
      editWorkmanship[index].value = event.target.value;
      const data = {
        ...datasheet,
        workmanship: editWorkmanship
      };
      setDatasheet(data);
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
        alignItems='flex-start'
        sx={{ gap: 2, flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}
      >
        <Box
          display='flex'
          sx={{ mt: 1, flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976D2', mb: 2 }} >{t(CONSTANTS.IMAGE)}</Typography>
          <CardMedia
            sx={{ width: 300, height: 300 }}
            component="img"
            image={datasheet?.image ?? imageNotFound}
            alt="img"
          />
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.IMAGE)}
              value={datasheet?.image ?? ''}
              onChange={handlerField('image')} />
          </FormControl>
        </Box>
        <Box sx={{ mt: 1, width: { xs: '100%', md: '30%', lg: '30%' } }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976D2' }} >{t(CONSTANTS.DATA)}</Typography>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.CODE)}
              value={datasheet?.code ?? ''}
              onChange={handlerField('code')} />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.NAME)}
              value={datasheet?.name ?? ''}
              onChange={handlerField('name')} />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.MODEL)}
              value={datasheet?.model ?? ''}
              onChange={handlerField('model')} />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.DESCRIPTION)}
              value={datasheet?.description ?? ''}
              onChange={handlerField('description')} />
          </FormControl>
          <FormControl
            fullWidth
            margin="normal">
            <InputLabel size="small" id="category-label">{t(CONSTANTS.CATEGORY)}</InputLabel>
            <Select
              size="small"
              labelId="category-label"
              id="category"
              multiple
              value={categorySelect}
              onChange={handleCategorySelect}
              input={<OutlinedInput label={t(CONSTANTS.CATEGORY)} />}
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
              label={t(CONSTANTS.EXPENSES)}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={datasheet?.expenses ?? ''}
              onChange={handlerField('expenses')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              size="small"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              label={t(CONSTANTS.WEIGHT)}
              value={datasheet?.weight ?? ''}
              onChange={handlerField('weight')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', mr: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.SILVER)}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={datasheet?.metals?.silver?.price ?? ''}
              onChange={handleMetalsField('silver.price')} />
          </FormControl>
          <FormControl
            sx={{ width: '49%', ml: '1%' }}
            margin="normal">
            <TextField
              size="small"
              label={t(CONSTANTS.GOLD)}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              value={datasheet?.metals?.gold?.price ?? ''}
              onChange={handleMetalsField('gold.price')} />
          </FormControl>
        </Box>
        <Box sx={{ mt: 1, width: { xs: '100%', md: '35%', lg: '35%' } }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976D2' }} >{t(CONSTANTS.WORKMANSHIPS)}</Typography>
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
                  label={t(CONSTANTS.NAME)}
                  value={workmanship.name}
                  onChange={handlerAddWorkmanship('name')} />
              </FormControl>
              <FormControl
                sx={{ width: '49%' }}
                margin="normal"
                size="small">
                <TextField
                  size="small"
                  label={t(CONSTANTS.VALUE)}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  value={workmanship.value ?? ''}
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
            datasheet?.workmanship?.map((work: Workmanship, index: number) => (
              <Box
                display='flex'
                align-item='center'
                key={work.name}>
                <Box className='row'>
                  <Box className='column'>
                    {work.name}
                  </Box>
                  <FormControl
                    className='value'
                    margin="normal"
                    size="small">
                    <TextField
                      size="small"
                      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      value={work.value ?? ''}
                      onChange={handlerEditWorkmanship(index)}/>
                  </FormControl>
                </Box>
                <IconButton className='delete' key={work.name} sx={{ padding: 0, mb: '10px', width: '10%' }} onClick={() => handlerDeleteWorkmanship(work.name)}>
                  {CONSTANTS.ICONS.DELETE}
                </IconButton>
              </Box>
            ))
          }
        </Box>
        <Box sx={{ mt: 1, width: { xs: '100%', md: '25%', lg: '25%' } }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#1976D2', mb: 2 }} >{t(CONSTANTS.RESULT)}</Typography>
          <TableCardDatasheet datasheet={datasheet}/>
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
          {id?.toUpperCase() === CONSTANTS.NEW.toUpperCase() ? t(CONSTANTS.CREATE) : t(CONSTANTS.EDIT)}
        </Button>
      </Box>
    </Box >
  );
};
