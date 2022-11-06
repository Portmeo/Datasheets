import { CONSTANTS } from "@/shared/constants";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { NavMenu } from "./NavMenu";
import { useState } from "react";

export const Header = () => {
    const [stateNav, setStateNav] = useState(false);
    const handlerStateNav = (state: boolean) => {
        setStateNav(state);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => handlerStateNav(true)}
                >
                    <MenuIcon />
                </IconButton>
                <NavMenu state={stateNav} handler={handlerStateNav} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{CONSTANTS.TITLE_APP}</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}