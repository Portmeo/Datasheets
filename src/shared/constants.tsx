import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';

export const CONSTANTS = {
    APP: {
        TITLE: 'Fichas',
        ITEMS_MENU: [
            {
                text: 'Fichas',
                icon: <ArticleIcon />,
                path: 'datasheet'
            },
            {
                text: 'Categorias',
                icon: <CategoryIcon />,
                path: 'category'
            }
        ],
    },    
    UI_STATE: {
        NONE: 0,
        READY: 1,
        LOADING: 2,
        LOADING_ERROR: 3,
        PROCESSING: 4,
        PROCESSING_ERROR: 5
    },
    REQUEST_ROUTES : {
        CATEGORY: '/category'
    }
};
