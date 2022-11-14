import { useState } from 'react';
import { CONSTANTS } from '@shared/constants';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavMenu } from './NavMenu';

export const Header = () => {
  const [stateNav, setStateNav] = useState(false);
  const handlerStateNav = (state: boolean) => {
    setStateNav(state);
  };

  return (
        <>
            <AppBar position="fixed" sx={{ mb: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handlerStateNav(!stateNav)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >{CONSTANTS.APP.TITLE.toUpperCase()}</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <NavMenu state={stateNav} handler={handlerStateNav} />
        </>
  );
};
