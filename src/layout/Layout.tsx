import { Box, CssBaseline } from "@mui/material";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Loader } from "@/shared/components/loader/Loader";
import { Alert } from "@/shared/components/alert/alert";
import { useLayout } from "./hooks/useLayout";
interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
    const { loader, alert, handlerClose, location } = useLayout();
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Content>
                    <>
                        { alert.type && <Alert severity={alert.type} message={alert.message} handlerClose={handlerClose} /> }
                        <span>{location.pathname}</span>
                        { children }
                    </>
                </Content>
            </Box>
            { loader && <Loader /> }
        </>
    )
};
