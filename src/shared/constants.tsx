import { ICONS } from './icons';

export const CONSTANTS: any = {
  ACTIONS: 'actions',
  CATEGORY: 'category',
  CATEGORIES: 'categories',
  DATASHEET: 'datasheet',
  DATASHEETS: 'datasheets',
  CREATE: 'create',
  EDIT: 'edit',
  SILVER: 'silver',
  GOLD: 'gold',
  TOTAL: 'total',
  CANCEL: 'cancel',
  CONFIRM: 'confirm',
  PERCENTAGE: 'percentage',
  EXPENSES: 'expenses',
  PRICE_SALE: 'price.sale',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
  WEIGHT: 'weight',
  CODE: 'code',
  WORKMANSHIP: 'workmanship',
  WORKMANSHIPS: 'workmanships',
  VALUE: 'value',
  NEW: 'new',
  NAME: 'name',
  APP: {
    TITLE: 'datasheets',
    ITEMS_MENU: [
      {
        text: 'datasheets',
        icon: ICONS.ARTICLE,
        path: 'datasheet'
      },
      {
        text: 'categories',
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
    PROCESS_SUCCESS: 6
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
  REQUEST_ROUTES: {
    CATEGORY: '/category',
    DATASHEET: '/datasheet'
  },
  SEVERITY_ALERT: {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    SUCCESS: 'success'
  },
  ICONS,
  MESSAGE_ACTIONS: {
    DELETE: 'question.delete'
  }
};
