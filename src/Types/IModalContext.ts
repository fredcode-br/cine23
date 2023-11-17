export default interface ModalContextType {
    idActor: number;
    setIdActor: React.Dispatch<React.SetStateAction<number>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};