import { createContext, useState } from 'react';
import { TourMember } from '../components/CartCustomerData';

export interface ICartCustomersContext {
  tourMembers: TourMember[];
  setTourMembers: React.Dispatch<React.SetStateAction<TourMember[]>>;
  customerName: string;
  setCustomerName: React.Dispatch<React.SetStateAction<string>>;
  customerSurname: string;
  setCustomerSurname: React.Dispatch<React.SetStateAction<string>>;
  customerEmail: string;
  setCustomerEmail: React.Dispatch<React.SetStateAction<string>>;
  customerPhoneNumber: string;
  setCustomerPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const CartCustomersContext = createContext<ICartCustomersContext | null>(null);

interface CartCustomersContextProviderProps {
  children: React.ReactNode;
}

export const CartCustomersContextProvider = ({ children }: CartCustomersContextProviderProps): JSX.Element => {
  const [tourMembers, setTourMembers] = useState<TourMember[]>([
    {
      name: '',
      surname: '',
    },
  ]);

  const [customerName, setCustomerName] = useState('');
  const [customerSurname, setCustomerSurname] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');

  return (
    <CartCustomersContext.Provider
      value={{
        tourMembers,
        setTourMembers,
        customerName,
        setCustomerName,
        customerSurname,
        setCustomerSurname,
        customerEmail,
        setCustomerEmail,
        customerPhoneNumber,
        setCustomerPhoneNumber,
      }}
    >
      {children}
    </CartCustomersContext.Provider>
  );
};

export default CartCustomersContextProvider;
