import { createContext, useContext, ReactNode, useState } from 'react';
import { ModalContextType } from "../../Types/modal";

type Props = {
    children?: ReactNode;
};

const DEFAULT_VALUE  = {
    idActor: 0,
    setIdActor: () => {},
    open: false,
    setOpen: () => {}
};

export const ModalContext = createContext<ModalContextType>(DEFAULT_VALUE );
ModalContext.displayName = "Modal";

export const ModalProvider = ({ children }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const [idActor, setIdActor] = useState<number>(0);
    
    return (
        <ModalContext.Provider value={{ 
            idActor,
            setIdActor,
            open, 
            setOpen     }}>
            { children }
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const { 
        open, 
        setOpen,
        idActor,
        setIdActor
    } = useContext(ModalContext);
    
    // useEffect(() => {
    //     if (idActor !== 0 && !open) {
    //         setOpen(true);
    //     }
    // }, [idActor, open]);
    

    function openModal(id: number) {
        setIdActor(id)
        setOpen(true)
    }

    return {
        idActor,
        setIdActor,
        open, 
        setOpen,
        openModal
    }
}