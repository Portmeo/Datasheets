export interface LoaderModel {
    inProgress: boolean[];
}

export interface ModalModel {
    open: boolean;
}

type severity = 'error' | 'warning' | 'info' | 'success' | null;

export interface AlertModel {
    type: severity;
    message: string | null;
}

export interface UserModel {
    email: string;
    isActive: boolean;
    role: string;
    _id: string;
}

export interface MainState {
    loader: LoaderModel;
    alert: AlertModel;
    user: UserModel;
}
