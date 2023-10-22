import { useContext } from 'react';
import { ITourMembersContext, TourMembersContext } from '../contexts';
import { Button } from '../components';

interface SummaryCartProps {
  imageUrl: string;
  place: string;
  country: string;
  date: string;
  departureCity: string;
  food: string;
  price: number;
}

export const CartSummary = ({
  imageUrl,
  place,
  country,
  date,
  departureCity,
  food,
  price,
}: SummaryCartProps): JSX.Element => {
  const { tourMembers } = useContext(TourMembersContext) as ITourMembersContext;

  const procedToCheckout = () => {
    window.location.replace('https://blik.com/');
  };

  return (
    <div className="cart-summary">
      <h2 className="mb-5">Podsumowanie wycieczki</h2>
      <div className="cart-summary__image">
        <img alt="holiday" src={imageUrl} />
      </div>
      <div className="cart-summary__content">
        <p>
          <strong>{place}</strong>
        </p>
        <p>{country}</p>
        <p>
          <img className="cart-summary__icon" alt="holiday cart date" src="/public/icons/calendar.svg"></img>
          {date}
        </p>
        <p>
          <img className="cart-summary__icon" alt="holiday cart plane" src="/public/icons/plane.svg"></img>
          {departureCity}
        </p>
        <p>
          <img className="cart-summary__icon" alt="holiday cart food" src="/public/icons/forkandknife.svg"></img>
          {food}
        </p>
        <p className="mt-7">Liczba osób: {tourMembers.length}</p>
        <p>
          cena: <strong>{price * tourMembers.length}</strong> zł
        </p>
        <div className="cart-summary__payment mt-10">
          <p>Akceptowalne płatności:</p>
          <img className="cart-summary__payment-method" alt="visa" src="/public/icons/visa.svg"></img>
          <img className="cart-summary__payment-method" alt="mastercard" src="/public/icons/mastercard.svg"></img>
          <img className="cart-summary__payment-method" alt="blik" src="/public/icons/blik.svg"></img>
          <img className="cart-summary__payment-method" alt="paypal" src="/public/icons/paypal.svg"></img>
          <img className="cart-summary__payment-method" alt="googlePay" src="/public/icons/gpay.svg"></img>
          <img className="cart-summary__payment-method" alt="applePay" src="/public/icons/applepay.svg"></img>
          <Button
            text="Przejdź do płatności"
            type="submit"
            color="yellow"
            isDisabled={false}
            onClick={procedToCheckout}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
