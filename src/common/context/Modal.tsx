import { createContext, useContext, ReactNode, useState } from 'react';
import IModalContext from "../../Types/IModalContext";

type Props = {
    children?: ReactNode;
};

const DEFAUL_VALUE = {
    idActor: -1,
    setIdActor: () => {},
    isOpen: false,
    setIsOpen: () => {}
};

export const ModalContext = createContext<IModalContext>(DEFAUL_VALUE);
ModalContext.displayName = "Modal";

export const ModalProvider = ({ children }: Props) => {
    const [ idActor, setIdActor ] = useState<number>(-1)
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    
    return (
        <ModalContext.Provider 
            value={{ 
                idActor,
                setIdActor,
                isOpen, 
                setIsOpen
            }}
        >
            { children }
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const { 
        idActor,
        setIdActor,
        isOpen, 
        setIsOpen
    } = useContext(ModalContext);
    

    return {
        idActor,
        setIdActor,
        isOpen, 
        setIsOpen
    }
}