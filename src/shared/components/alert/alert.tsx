import PropTypes from 'prop-types';
import { Alert as MuiAlert, Box, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface Props {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string | null;
    handlerClose: () => void;
};

export const Alert = ({ severity, message, handlerClose }: Props) => {
    const [show, setShow] = useState(true);

    const onClose = () => {
        setShow(false);
        handlerClose();
    };

    return (
        <Fade in={show} timeout={400}>
            <Box>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <MuiAlert severity={severity}>{message}</MuiAlert>
            </Box>
        </Fade>
    )
};

Alert.propTypes = {
    severity: PropTypes.string,
    message: PropTypes.string,
    handlerClose: PropTypes.func
};
