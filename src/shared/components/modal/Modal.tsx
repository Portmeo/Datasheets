import ReactDOM from "react-dom";
import './Modal.css';
interface Props {
    children?: JSX.Element
}

export const Modal = ({ children }: Props) => {
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
};