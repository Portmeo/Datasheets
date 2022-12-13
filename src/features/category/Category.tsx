import { Link } from 'react-router-dom';
import { CONSTANTS } from '@shared/constants';
import { Modal } from '@shared/components/modal/Modal';
import { Table } from '@shared/components/table/Table';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { useCategory } from './hooks/useCategory';
import { utcStringToDateFormat } from '@/shared/utils/date.utils';
import './Category.css';
import { useTranslation } from 'react-i18next';

export const Category = () => {
  const { t } = useTranslation();
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
                    <Tooltip title={`${t(CONSTANTS.CREATE)}  ${t(CONSTANTS.CATEGORY)}`}>
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
                        <Typography component="div" sx={{ flexGrow: 1 }} >{t(CONSTANTS.MESSAGE_ACTIONS.DELETE)}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(action => {
                                  return <Button key={action} variant="contained" onClick={() => actionsModal[action].action(deleteCategory)}>{t(action)}</Button>;
                                })
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
  );
};
