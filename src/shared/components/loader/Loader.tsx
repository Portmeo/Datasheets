import ReactPortal from '@shared/components/ReactPortal';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css';

interface Props {
  container?: string;
};

export const Loader = ({ container = 'loader' }: Props) => {
  return (
    <ReactPortal container={container}>
      <div className="loader">
        <div className="loader-content">
          <CircularProgress />
        </div>
      </div>
    </ReactPortal>
  );
};

Loader.propTypes = {
  container: PropTypes.string
};
