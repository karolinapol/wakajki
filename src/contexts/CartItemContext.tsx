import { createContext, useState } from 'react';

export interface CartData {
  imageUrl: string;
  place: string;
  country: string;
  date: string;
  departureCity: string;
  food: string;
  price: number;
}

export interface ICartItemContext {
  cartData: CartData;
  setCartData: React.Dispatch<React.SetStateAction<CartData>>;
}

export const CartItemContext = createContext<ICartItemContext | null>(null);

interface CartItemContextProviderProps {
  children: React.ReactNode;
}

export const CartItemContextProvider = ({ children }: CartItemContextProviderProps): JSX.Element => {
  const items = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') ?? '') : '';

  const [cartData, setCartData] = useState<CartData>(
    items
      ? items
      : {
          imageUrl: '',
          place: '',
          country: '',
          date: '',
          departureCity: '',
          food: '',
          price: 0,
        },
  );

  return <CartItemContext.Provider value={{ cartData, setCartData }}>{children}</CartItemContext.Provider>;
};

export default CartItemContextProvider;
