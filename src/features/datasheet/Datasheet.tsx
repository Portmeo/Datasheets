import { Modal } from "@/shared/components/modal/Modal";
import { CONSTANTS } from "@/shared/constants";
import { Box, Typography, Button } from "@mui/material";
import { CardDatasheet } from "./components/card-datasheet/Card-datasheet";
import { useDatasheet } from "./hooks/useDatasheet";
import { DatasheetModel } from "./models/datasheet.model";
import './Datasheet.css';

export const Datasheet = () => {
    const { datasheets, deleteDatasheet, actionsModal, actionsCard } = useDatasheet();
    return (
        <>
            <Box
                display='flex'
                flex-wrap='wrap'
                justifyContent='center'>
                {
                    datasheets.map((datasheet: DatasheetModel) => (
                        <Box sx={{ m: 2 }}>
                            <CardDatasheet key={datasheet.code} datasheet={datasheet} actions={actionsCard} />
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
                                Object.keys(actionsModal).map(a => {
                                    return <Button key={a} variant="contained" onClick={() => actionsModal[a].action(deleteDatasheet)}>{a}</Button>
                                })
                            }
                        </Box>
                    </Box>
                </Modal>
            }
        </>
    )
};
