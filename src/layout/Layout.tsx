import { Box } from "@mui/material";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from "@/shared/components/loader/Loader";
import { loaderSelect } from "@/state/reducers/loader";
import { notificationSelect } from "@/state/reducers/notification";
import { Notification } from "@/shared/components/notification/notification";
import { notificationActions } from '@/state/reducers/notification';

interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelect);
    const notification = useSelector(notificationSelect);
    const handlerClose = () => {
        dispatch(notificationActions.resetNotification());
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
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
