import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

interface Props {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string | null;
};

export const Notification = ({ severity, message }: Props) => {
    return (
        <Alert severity={severity}>{message}</Alert>
    )
};

Notification.propTypes = {
    severity: PropTypes.string,
    message: PropTypes.string
};
