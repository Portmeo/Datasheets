import ReactPortal from '@/shared/components/ReactPortal';
import PropTypes from 'prop-types';
import './Modal.css';
interface Props {
    children?: JSX.Element;
    isOpen: boolean;
    handlerClose: () => void;
}

export const Modal = ({ isOpen, handlerClose, children }: Props) => {
    return (
        <ReactPortal container='modal'>
            <div className='modal' style={{ display: isOpen ? 'block' : 'none' }}>
                <div className='modal-content'>
                    {children}
                    <button onClick={handlerClose} className='close-btn'>
                        Close
                    </button>
                </div>
            </div>
        </ReactPortal>
    )
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    handlerClose: PropTypes.func
};