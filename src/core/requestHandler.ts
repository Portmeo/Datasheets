import { CONSTANTS } from '@/shared/constants';
import { errorActions } from '@/state/reducers/error';
import { loaderActions } from '@/state/reducers/loader';
import { store } from '@/state/store';
import { SetErrorGeneric } from './errorHandler';

const headers = {
    'Content-Type': 'application/json'
};

export const Get = async (url: string, showLoader = true): Promise<any> => {
    showLoader && store.dispatch(loaderActions.show());
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers
        });

        if (!response.ok) {
            throw new Error("Not 2xx response", { cause: response });
        }
        
        return await response.json();
    } catch (error) {
        SetErrorGeneric();
    } finally {
        showLoader && store.dispatch(loaderActions.hide());
    }
};
