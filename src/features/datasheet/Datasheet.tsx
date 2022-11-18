import { Link } from 'react-router-dom';
import { Modal } from '@shared/components/modal/Modal';
import { CONSTANTS } from '@shared/constants';
import { Box, Typography, Button, Tooltip, IconButton } from '@mui/material';
import { CardDatasheet } from './components/card-datasheet/Card-datasheet';
import { useDatasheet } from './hooks/useDatasheet';
import { DatasheetModel } from './models/datasheet.model';
import './Datasheet.css';

export const Datasheet = () => {
  const { datasheets, deleteDatasheet, actionsModal, actionsCard } = useDatasheet();
  return (
        <>
            <Box
                display="flex"
                justifyContent="flex-end"
            >
                <Link to="new">
                    <Tooltip title={`${CONSTANTS.CREATE}  ${CONSTANTS.DATASHEET}`}>
                        <IconButton>
                            {CONSTANTS.ICONS.ADD}
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'>
                {
                    datasheets.map((datasheet: DatasheetModel) => (
                        <Box key={datasheet.id} sx={{ m: 2 }}>
                            <CardDatasheet datasheet={datasheet} actions={actionsCard} />
                        </Box>
                    ))
                }
            </Box>
            {deleteDatasheet &&
                <Modal isOpen={!!deleteDatasheet} handlerClose={actionsModal.cancel.action}>
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }} >{CONSTANTS.MESSAGE_ACTIONS.DELETE}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(a => <Button key={a} variant="contained" onClick={() => actionsModal[a].action(deleteDatasheet)}>{a}</Button>)
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
  );
};