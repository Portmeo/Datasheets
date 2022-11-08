import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    children?: JSX.Element;
    container: string;
}

const createContainer = (container: string) => {
    const containerElement = document.createElement('div');
    containerElement.setAttribute('id', container);
    document.body.appendChild(containerElement);
    return containerElement;
}

const ReactPortal = ({ children, container }: Props) => {
    const [containerElement, setContainerElement] = useState<HTMLElement | null>(null);
    
    useLayoutEffect(() => {
        let element = document.getElementById(container);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createContainer(container);
        }
        setContainerElement(element);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [container]);

    if (containerElement === null) return null;

    return createPortal(children, document.getElementById(container) as HTMLElement);
}

export default ReactPortal;