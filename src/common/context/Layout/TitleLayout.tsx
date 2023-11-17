import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../Modal';

export const TitleLayout = () => {
  return (
    <ModalProvider> 
        <Outlet />
    </ModalProvider>
  );
};
