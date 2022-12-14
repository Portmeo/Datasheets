import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Breadcrumb = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const mappedRouter: any = {
    datasheet: 'datasheets',
    category: 'categories'
  };

  const breadcrumb = location.pathname.split('/').slice(1).map(path => t(mappedRouter[path] || path)).join(' / ');
  return (
        <Box sx={{ mt: 1 }}>
            <span>{breadcrumb}</span>
        </Box>
  );
};
