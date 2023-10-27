import { Link } from 'react-router-dom';
import { CartCustomerData } from '../components';
import { CartSummary } from '../components/CartSummary';
import { CartItemContext, ICartItemContext, CartCustomersContextProvider } from '../contexts';
import { useContext, useEffect, useState } from 'react';

export const CartPage = () => {
  const { cartData } = useContext(CartItemContext) as ICartItemContext;
  const [isCartDataNotEmpty, setIsCartDataNotEmpty] = useState(false);

  useEffect(() => {
    setIsCartDataNotEmpty(
      cartData.imageUrl !== '' &&
        cartData.place !== '' &&
        cartData.country !== '' &&
        cartData.date !== '' &&
        cartData.departureCity !== '' &&
        cartData.food !== '' &&
        cartData.price > 0,
    );
  }, [cartData]);

  return isCartDataNotEmpty ? (
    <>
      <CartCustomersContextProvider>
        <div className="content cart-page">
          <div className="cart-page__customer-data">
            <CartCustomerData></CartCustomerData>
          </div>
          <div className="cart-page__summary">
            <CartSummary
              imageUrl={cartData.imageUrl}
              place={cartData.place}
              country={cartData.country}
              date={cartData.date}
              departureCity={cartData.departureCity}
              food={cartData.food}
              price={cartData.price}
            ></CartSummary>
          </div>
        </div>
      </CartCustomersContextProvider>
    </>
  ) : (
    <div className="cart-page__empty">
      <h2 className="mb-4">Koszyk pusty</h2>
      <h3>
        <span>Przejdź na stronę </span>
        <Link className="link" to="/">
          wycieczek
        </Link>
        <span> i wybierz coś teraz!</span>
      </h3>
    </div>
  );
};
