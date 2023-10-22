// TODO SAVE CART DATA, ADD REMOVING FROM CART
import { useLocation } from 'react-router-dom';
import { CartCustomerData } from '../components';
import { CartSummary } from '../components/CartSummary';
import TourMembersContextProvider from '../contexts/TourMembersContext';

export const CartPage = () => {
  const { state } = useLocation();

  return (
    <>
      {state && (
        <TourMembersContextProvider>
          <div className="content cart-page">
            <div className="cart-page__customer-data">
              <CartCustomerData></CartCustomerData>
            </div>
            <div className="cart-page__summary">
              <CartSummary
                imageUrl={state.imageUrl}
                place={state.place}
                country={state.country}
                date={state.date}
                departureCity={state.departureCity}
                food={state.food}
                price={state.price}
              ></CartSummary>
            </div>
          </div>
        </TourMembersContextProvider>
      )}
    </>
  );
};
