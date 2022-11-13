import { Box, CssBaseline } from "@mui/material";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Loader } from "@/shared/components/loader/Loader";
import { Notification } from "@/shared/components/notification/notification";
import { useLayout } from "./hooks/useLayout";
interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
    const { loader, notification, handlerClose } = useLayout(); 
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Content>
                    <>
                        { notification.type && <Notification severity={notification.type} message={notification.message} handlerClose={handlerClose} /> }
                        { children }
                    </>
                </Content>
            </Box>
            { loader && <Loader /> }
        </>
    )
};
