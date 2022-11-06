import { Box } from "@mui/material";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

interface Props {
    children?: JSX.Element;
};

export const Layout = ({ children }: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Content>
                {children}
            </Content>
        </Box>
    )
}