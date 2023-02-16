import { Box, CssBaseline } from '@mui/material';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Loader } from '@shared/components/loader/Loader';
import { Alert } from '@shared/components/alert/Alert';
import { useLayout } from './hooks/useLayout';
import { Breadcrumb } from './components/Breadrumb';
interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  const { loader, alert, handlerClose } = useLayout();
  return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Content>
                    <>
                        < Breadcrumb />
                        { alert.type && <Alert severity={alert.type} message={alert.message} handlerClose={handlerClose} /> }
                        { children }
                    </>
                </Content>
            </Box>
            { loader.length && <Loader /> }
        </>
  );
};
