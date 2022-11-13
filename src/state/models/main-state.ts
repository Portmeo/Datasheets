export interface LoaderModel {
    state: boolean;
}

export interface ModalModel {
    open: boolean;
}

type severity = 'error' | 'warning' | 'info' | 'success' | null;

export interface AlertModel {
    type: severity;
    message: string | null;
}



export interface MainState {
    loader: LoaderModel;
    alert: AlertModel;
}
