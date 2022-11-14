import { RequestHandlerService } from "@/core/requestHandler.service";
import { CONSTANTS } from "@/shared/constants";
import { DatasheetModel, NewDatasheetModel } from "../models/datasheet.model";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const DatasheetService = {
    getAll: (): Promise<DatasheetModel[]> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.DATASHEET}`),
    get: (id: string): Promise<DatasheetModel> => RequestHandlerService.fetch(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.DATASHEET}/${id}`),
    create: (dataSheet: NewDatasheetModel): Promise<DatasheetModel> => RequestHandlerService.post(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.DATASHEET}`, { body: dataSheet }),
    update: (dataSheet: DatasheetModel): Promise<DatasheetModel> => RequestHandlerService.put(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.DATASHEET}/${dataSheet.id}`, { body: dataSheet }),
    delete: (id: string): Promise<DatasheetModel> => RequestHandlerService.delete(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.DATASHEET}/${id}`),
};
