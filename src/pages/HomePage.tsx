import { useEffect, useState } from 'react';
import { HolidayCard } from '../components';
import { CartItemContextProvider } from '../contexts';

export interface Holiday {
  imageUrl: string;
  country: string;
  price: number;
  date: string;
  departureCity: string;
  food: string;
  rating: number;
  place: string;
}

export const HomePage = () => {
  const [holidayData, setHolidayData] = useState<[]>();

  useEffect(() => {
    fetch(' http://localhost:3000/holidays')
      .then((response) => response.json())
      .then((jsonData) => setHolidayData(jsonData));
  }, []);

  return (
    <div className="content">
      <div className="holiday-cards-container">
        <div className="holiday-cards">
          <CartItemContextProvider>
            {holidayData &&
              holidayData.map((holiday: Holiday, index) => {
                return (
                  <HolidayCard
                    key={index}
                    imageUrl={holiday.imageUrl}
                    country={holiday.country}
                    price={holiday.price}
                    date={holiday.date}
                    departureCity={holiday.departureCity}
                    food={holiday.food}
                    rating={holiday.rating}
                    place={holiday.place}
                  ></HolidayCard>
                );
              })}
          </CartItemContextProvider>
        </div>
      </div>
    </div>
  );
};
