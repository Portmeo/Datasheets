import ReactPortal from '@/shared/components/ReactPortal';
import { Box, Fade, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import './Modal.css';
interface Props {
    children?: JSX.Element;
    isOpen: boolean;
    handlerClose?: () => void;
};

export const Modal = ({ isOpen, handlerClose, children }: Props) => {
  return (
    <ReactPortal container='modal'>
        <Fade in={isOpen} timeout={400}>
            <Box className='modal'>
                <Box className='modal-content'>
                    <Box className='modal-content__close'>
                        <IconButton aria-label="close" onClick={handlerClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
        </Fade>
    </ReactPortal >
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handlerClose: PropTypes.func
};
