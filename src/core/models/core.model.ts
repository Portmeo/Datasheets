interface CallbackError {
    callback: (...params: any) => void | {};
    params?: any;
}

interface Generic {
    [key:string]: string;
}

export interface OptionsRequest {
    showLoader?: boolean;
    headers?: {};
    body?: any;
    queryParams?: Generic;
    callbackError?: CallbackError;
};

export const DEFAULTS_OPTIONS_REQUEST: OptionsRequest = {
    showLoader: true,
    headers: {
        'Content-Type': 'application/json'
    }
};

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};
