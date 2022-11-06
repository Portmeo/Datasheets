import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const CONSTANTS = {
    TITLE_APP: 'Fichas Técnicas',
    ITEMS_MENU_APP: [
        {
            text: 'Fichas',
            icon: <InboxIcon />,
            path: 'datasheet'
        },
        {
            text: 'Categorias',
            icon: <MailIcon />,
            path: 'category'
        }
    ],
    UI_STATE: {
        None: 0,
        Ready: 1,
        Loading: 2,
        ErrorLoading: 3,
        Processing: 4,
        ErrorProcessing: 5
    }
};
