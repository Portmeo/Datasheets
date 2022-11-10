import PropTypes from 'prop-types';
import { Alert, Box, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface Props {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string | null;
    handlerClose: () => void;
};

export const Notification = ({ severity, message, handlerClose }: Props) => {
    const [show, setShow] = useState(true);

    const onClose = () => {
        setShow(false);
        handlerClose();
    };

    return (
        <Fade in={show} timeout={500}>
            <Box>
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                <Alert severity={severity}>{message}</Alert>
            </Box>
        </Fade>
    )
};

Notification.propTypes = {
    severity: PropTypes.string,
    message: PropTypes.string,
    handlerClose: PropTypes.func
};
