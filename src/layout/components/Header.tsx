import { useState } from 'react';
import { CONSTANTS } from '@shared/constants';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { NavMenu } from './NavMenu';
import { useTranslation } from 'react-i18next';
import { ICONS } from '@/shared/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions, userSelect } from '@/state/reducers/user';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [stateNav, setStateNav] = useState(false);
  const handlerStateNav = (state: boolean) => {
    setStateNav(state);
  };

  const user = useSelector(userSelect);

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    dispatch(userActions.logout());
    navigate('/login');
  };

  return (
        <>
            <AppBar position="fixed" sx={{ mb: 2, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    { user &&
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => handlerStateNav(!stateNav)}
                        >
                            {ICONS.MENU}
                        </IconButton>
                    }
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >{t(CONSTANTS.APP.TITLE)}</Typography>
                    { user &&
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={logout}
                        >
                            {ICONS.LOGOUT}
                        </IconButton>
                    }
                </Toolbar>
            </AppBar>
            <NavMenu state={stateNav} handler={handlerStateNav} />
        </>
  );
};
