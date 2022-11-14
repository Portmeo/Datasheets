import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Breadcrumb = () => {
  const location = useLocation();
  const breadcrumb = location.pathname.split('/').slice(1).map(path => path.toUpperCase()).join(' / ');
  return (
        <Box sx={{ mt: 1 }}>
            <span>{breadcrumb}</span>
        </Box>
  );
};
