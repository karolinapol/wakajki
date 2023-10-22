import { createContext, useState } from 'react';
import { TourMember } from '../components/CartCustomerData';

export interface ITourMembersContext {
  tourMembers: TourMember[];
  setTourMembers: React.Dispatch<React.SetStateAction<TourMember[]>>;
}

export const TourMembersContext = createContext<ITourMembersContext | null>(null);

interface MainContextProviderProps {
  children: React.ReactNode;
}

export const TourMembersContextProvider = ({ children }: MainContextProviderProps): JSX.Element => {
  const [tourMembers, setTourMembers] = useState<TourMember[]>([
    {
      name: '',
      surname: '',
    },
  ]);

  return <TourMembersContext.Provider value={{ tourMembers, setTourMembers }}>{children}</TourMembersContext.Provider>;
};

export default TourMembersContextProvider;
