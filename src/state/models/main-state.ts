export interface LoaderModel {
    state: boolean;
}

export interface ModalModel {
    open: boolean;
}

export interface ErrorGenericModel {
    code: number | null;
    message: string | null;
}


export interface MainState {
    loader: LoaderModel;
    modal: ModalModel;
    error: ErrorGenericModel;
}
