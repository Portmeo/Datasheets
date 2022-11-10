import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';

export const CONSTANTS: any = {
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
    UI_STATE_MESSAGE: {
        0: '',
        1: 'Datos disponible',
        2: 'Cargando',
        3: 'Error al obtener los datos',
        4: 'Procesando',
        5: 'Error al procesar los datos'
    },
    REQUEST_ROUTES : {
        CATEGORY: '/categorys'
    },
    SEVERITY_NOTIFICATION: {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        SUCCESS: 'success'
    }
};
