import PropTypes from 'prop-types';
import { Alert as MuiAlert, Box, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: any;
    handlerClose: () => void;
};

export const Alert = ({ severity, message, handlerClose }: Props) => {
  const { t } = useTranslation();
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
                <MuiAlert severity={severity}>{t(message)}</MuiAlert>
            </Box>
        </Fade>
  );
};

Alert.propTypes = {
  severity: PropTypes.string,
  message: PropTypes.any,
  handlerClose: PropTypes.func
};
