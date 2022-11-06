import ReactPortal from '@/shared/components/ReactPortal';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css';

interface Props {
    isShow: boolean;
}

export const Loader = ({isShow}: Props) => {
    return (
        <ReactPortal container='loader'>
            <div className="loader" style={{display: isShow ? 'block' : 'none'}}> 
                <div className="loader-content">
                    <CircularProgress />
                </div>
            </div>
        </ReactPortal>
    )
};

Loader.propTypes = {
    isShow: PropTypes.bool
};

