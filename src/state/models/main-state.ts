export interface Loader {
    state: boolean;
}

export interface Modal {
    open: boolean;
}


export interface MainState {
    loader: Loader;
    modal: Modal;
}
