import { Link } from 'react-router-dom';
import { CONSTANTS } from '@shared/constants';
import { Modal } from '@shared/components/modal/Modal';
import { Table } from '@shared/components/table/Table';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { useCategory } from './hooks/useCategory';
import { utcStringToDateFormat } from '@/shared/utils/date.utils';
import './Category.css';

export const Category = () => {
  const { categories, deleteCategory, actionsTable, actionsModal } = useCategory();

  const rows = categories.map(category => (
    {
      _id: category._id,
      name: category.name,
      createdAt: utcStringToDateFormat(category.createdAt),
      updatedAt: utcStringToDateFormat(category.updatedAt)
    }
  ));

  return (
        <>
            <Box
                display="flex"
                justifyContent="flex-end"
            >
                <Link to="new">
                    <Tooltip title={`${CONSTANTS.CREATE}  ${CONSTANTS.CATEGORY}`}>
                        <IconButton>
                            {CONSTANTS.ICONS.ADD}
                        </IconButton>
                    </Tooltip>
                </Link>
            </Box>
            < Table rows={rows} actions={actionsTable} />
            {deleteCategory &&
                <Modal isOpen={!!deleteCategory} handlerClose={actionsModal.cancel.action}>
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }} >{CONSTANTS.MESSAGE_ACTIONS.DELETE}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(a => {
                                  return <Button key={a} variant="contained" onClick={() => actionsModal[a].action(deleteCategory)}>{a}</Button>;
                                })
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
  );
};
