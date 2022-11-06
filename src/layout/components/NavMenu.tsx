import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material"
import { CONSTANTS } from "@/shared/constants";

interface Props {
    state: boolean;
    handler: (state: boolean) => void;
};

export const NavMenu = ({ state, handler }: Props) => {
    const redirect = useNavigate();

    const handleRedirect = (path: string) => {
        redirect(path)
    };

    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event?.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            handler(open);
        };
    return (
        <SwipeableDrawer
            anchor='left'
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            <List>
                {CONSTANTS.ITEMS_MENU_APP.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={(e) => handleRedirect(item.path)}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    )
}
