export interface LoaderModel {
    state: boolean;
}

export interface ModalModel {
    open: boolean;
}

type severity = 'error' | 'warning' | 'info' | 'success' | null;

export interface NotificationModel {
    type: severity;
    message: string | null;
}



export interface MainState {
    loader: LoaderModel;
    notification: NotificationModel;
}
