import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import { useContext, useEffect, useState } from 'react';
import { CartItemContext, ICartItemContext } from '../contexts';

interface HolidayCardProps {
  imageUrl: string;
  country: string;
  price: number;
  date: string;
  departureCity: string;
  food: string;
  rating: number;
  place: string;
  additionalClasses?: string;
}

const generateStars = (rating: number) => {
  const stars = [];

  // Fill the stars according to the rating
  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={`star-filled-${i}`}
        className="holiday-card__icon holiday-card__icon--star"
        src="/public/icons/star.svg"
        alt="filled star"
      />,
    );
  }

  // Add gray (empty) stars for the remaining up to 5 stars
  for (let i = rating; i < 5; i++) {
    stars.push(
      <img
        key={`star-empty-${i}`}
        className="holiday-card__icon holiday-card__icon--star"
        src="/public/icons/star-silver.svg"
        alt="empty star"
      />,
    );
  }

  return stars;
};

export const HolidayCard = ({
  imageUrl,
  country,
  price,
  date,
  departureCity,
  food,
  rating,
  place,
}: HolidayCardProps): JSX.Element => {
  const { cartData } = useContext(CartItemContext) as ICartItemContext;
  const [isCartDataEmpty, setIsCartDataEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsCartDataEmpty(
      cartData.imageUrl !== '' &&
        cartData.place !== '' &&
        cartData.country !== '' &&
        cartData.date !== '' &&
        cartData.departureCity !== '' &&
        cartData.food !== '' &&
        cartData.price > 0,
    );
  }, [cartData]);

  const addToCart = () => {
    const cartDataToAdd = { imageUrl, place, country, date, departureCity, food, price };
    localStorage.setItem('cart', JSON.stringify(cartDataToAdd));
    navigate('/cart');
  };

  return (
    <div className="holiday-card">
      <div className="holiday-card__content">
        <div className="holiday-card__image">
          <img alt="holiday card" src={imageUrl} />
        </div>

        <div className="holiday-card__data">
          <p>
            <strong>{place}</strong>
          </p>
          <div className="holiday-card__info">
            <p>{country}</p>
            <p>
              <img className="holiday-card__icon" alt="holiday card date" src="/public/icons/calendar.svg"></img>
              {date}
            </p>
            <p>
              <img className="holiday-card__icon" alt="holiday card plane" src="/public/icons/plane.svg"></img>
              {departureCity}
            </p>
            <p>
              <img className="holiday-card__icon" alt="holiday card food" src="/public/icons/forkandknife.svg"></img>
              {food}
            </p>
            <p>{generateStars(rating)}</p>
          </div>
          <div className="holiday-card__price">
            <p>
              od <strong>{price}</strong> zł /os.
            </p>
            <Button
              text="Dodaj do koszyka"
              type="submit"
              color="yellow"
              isDisabled={isCartDataEmpty}
              onClick={addToCart}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
