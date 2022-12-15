import { ICONS } from './icons';

export const CONSTANTS: any = {
  ACTIONS: 'actions',
  SEARCH: 'search',
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
  PRICE: 'price',
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
    1: 'available.data',
    2: 'loading',
    3: 'error.getting.data',
    4: 'processing',
    5: 'error.processing.data',
    6: 'process.done.correctly'
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
