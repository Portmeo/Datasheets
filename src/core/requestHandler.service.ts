import { ErrorHandlerService } from './errorHandler.service';
import { LoaderService } from './loader.service';
import { DEFAULTS_OPTIONS_REQUEST as DEFAULTS_OPTIONS, METHODS, OptionsRequest } from './models/core.model';

export const RequestHandlerService = {
    async fetch(url: string, options?: OptionsRequest ): Promise<any> {        
        return await request(url, METHODS.GET, options);
    },
    async post(url: string, options?: OptionsRequest ): Promise<any> {       
        return await request(url, METHODS.POST, options);
    },
    async put(url: string, options?: OptionsRequest ): Promise<any> {       
        return await request(url, METHODS.PUT, options);
    },
    async patch(url: string, options?: OptionsRequest ): Promise<any> {       
        return await request(url, METHODS.PATCH, options);
    },
    async delete(url: string, options?: OptionsRequest ): Promise<any> {       
        return await request(url, METHODS.DELETE, options);
    }
};

const request = async (url: string, type: string, options?: OptionsRequest ): Promise<any> => {
    options = {
        ...DEFAULTS_OPTIONS,
        ...options
    };

    url += `?${options?.queryParams ? Object.keys(options.queryParams).map(key => key + '=' + options!.queryParams![key]).join('&') : ''}`;

    options.showLoader && LoaderService.show();

    try {
        const response = await fetch(url, {
            method: type,
            headers: options.headers,
            ...(options.body && { body: options.body })
        });

        if (!response.ok) {
            throw response;
        };

        return await response.json();
    } catch (error) {
        if (options.callbackError) {
           options.callbackError.callback(options.callbackError.params);
        } else {
            ErrorHandlerService.setErrorGeneric(error);
        }
    } finally {
        options.showLoader && LoaderService.hide();
    }
};
