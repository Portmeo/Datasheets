import { Modal } from '@/shared/components/modal/Modal';
import { Table } from '@/shared/components/table/Table';
import { CONSTANTS } from '@/shared/constants';
import { Box, Button, Typography } from '@mui/material';
import { useCategory } from './hooks/useCategory';
import './Category.css';

export const Category = () => {
    const { categories, deleteCategory, actionsTable, actionsModal } = useCategory();

    const rows = categories.map(category => ({ ...category, name: category.name }));

    return (
        <>
            <h1>Category</h1>
            < Table rows={rows} actions={actionsTable} />
            {deleteCategory &&
                <Modal isOpen={!!deleteCategory} handlerClose={actionsModal.cancel.action}>
                    <Box>
                        <Typography component="div" sx={{ flexGrow: 1 }} >{CONSTANTS.MESSAGE_ACTIONS.DELETE}</Typography>
                        <Box className='actions-modal'>
                            {
                                actionsModal &&
                                Object.keys(actionsModal).map(a => {
                                    return <Button key={a} variant="contained" onClick={() => actionsModal[a].action(deleteCategory)}>{a}</Button>
                                })
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
    )
}