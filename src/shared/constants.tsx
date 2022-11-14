import { ICONS } from './icons';

export const CONSTANTS: any = {
    ACTIONS: 'Actions',
    CATEGORY: 'Category',
    CREATE: 'Create',
    EDIT: 'Edit',
    NEW: 'New',
    NAME: 'Name',
    APP: {
        TITLE: 'DataSheet',
        ITEMS_MENU: [
            {
                text: 'Datasheet',
                icon: ICONS.ARTICLE,
                path: 'datasheet'
            },
            {
                text: 'Categories',
                icon: ICONS.CATEGORY,
                path: 'category'
            }
        ]
    },    
    UI_STATE: {
        NONE: 0,
        READY: 1,
        LOADING: 2,
        LOADING_ERROR: 3,
        PROCESSING: 4,
        PROCESSING_ERROR: 5,
        PROCESS_SUCCESS: 6,
    },
    UI_STATE_MESSAGE: {
        0: '',
        1: 'Datos disponible',
        2: 'Cargando',
        3: 'Error al obtener los datos',
        4: 'Procesando',
        5: 'Error al procesar los datos',
        6: 'Proceso realizado correctamente'
    },
    REQUEST_ROUTES : {
        CATEGORY: '/category',
        DATASHEET: '/datasheet'
    },
    SEVERITY_ALERT: {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        SUCCESS: 'success'
    },
    ICONS: ICONS,
    MESSAGE_ACTIONS: {
        DELETE: '¿Esta seguro que desea eliminar?'
    }
};
