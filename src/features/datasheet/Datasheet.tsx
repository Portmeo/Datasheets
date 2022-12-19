import { Link } from 'react-router-dom';
import { Modal } from '@shared/components/modal/Modal';
import { CONSTANTS } from '@shared/constants';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Button, Tooltip, IconButton, FormControl, TextField } from '@mui/material';
import { CardDatasheet } from './components/card-datasheet/Card-datasheet';
import { useDatasheet } from './hooks/useDatasheet';
import { DatasheetModel } from './models/datasheet.model';
import './Datasheet.css';
import { ChangeEvent } from 'react';

export const Datasheet = () => {
  const { t } = useTranslation();
  const { datasheets, deleteDatasheet, actionsModal, actionsCard, datasheetsToShow, setDatasheetsToShow } = useDatasheet();
  const handlerSearch = () => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value?.toLowerCase();
      setDatasheetsToShow(datasheets.filter(datasheet => (
        datasheet.name.toLowerCase().includes(value) || datasheet.code.toLowerCase().includes(value)
      )));
    };
  };

  return (
        <>
            <Box
                display="flex"
                justifyContent="flex-end"
            >
                <Link to="new">
                    <Tooltip title={`${t(CONSTANTS.CREATE)}  ${t(CONSTANTS.DATASHEET)}`}>
                        <IconButton>
                            {CONSTANTS.ICONS.ADD}
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
            <Box sx={{ mt: 1, width: { xs: '100%', md: '50%', lg: '50%' } }}>
                <FormControl
                    fullWidth
                    margin="normal">
                    <TextField
                    size="small"
                    label={t(CONSTANTS.SEARCH)}
                    onChange={handlerSearch()} />
                </FormControl>
            </Box>
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'>
                {
                    datasheetsToShow.map((datasheet: DatasheetModel) => (
                        <Box key={datasheet._id} sx={{ m: 1 }}>
                            <CardDatasheet datasheet={datasheet} actions={actionsCard} />
                        </Box>
                    ))
                }
            </Box>
            {deleteDatasheet &&
                <Modal isOpen={!!deleteDatasheet} handlerClose={actionsModal.cancel.action}>
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }} >{t(CONSTANTS.MESSAGE_ACTIONS.DELETE)}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(action => <Button key={action} variant="contained" onClick={() => actionsModal[action].action(deleteDatasheet)}>{t(action)}</Button>)
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
  );
};
