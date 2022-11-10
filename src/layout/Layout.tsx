import { Box } from "@mui/material";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { useSelector } from 'react-redux';
import { Loader } from "@/shared/components/loader/Loader";
import { loaderSelect } from "@/state/reducers/loader";
import { errorSelect } from "@/state/reducers/error";
import { Notification } from "@/shared/components/notification/notification";

interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
    const loader = useSelector(loaderSelect);
    const error = useSelector(errorSelect);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Header />
                <Content>
                    <>
                        { error.code && <Notification severity="error" message={error.message} /> }
                        { children }
                    </>
                </Content>
            </Box>
            { loader && <Loader /> }
        </>
    )
};
