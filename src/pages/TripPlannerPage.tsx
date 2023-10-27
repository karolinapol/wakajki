import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Input, Button } from '../components';

import 'react-datepicker/dist/react-datepicker.css';

export const TripPlannerPage = () => {
  let plannerData: {
    startDate: Date;
    endDate: Date;
    country: string;
    city: string;
    departureAirport: string;
    arrivalAirport: string;
    food: string;
    airportTransport: string;
    travelPlan: string;
    notes: string;
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [food, setFood] = useState('Własne');
  const [airportTransport, setAirportTransport] = useState('Taxi');
  const [travelPlan, setTravelPlan] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    plannerData = JSON.parse(localStorage.getItem('plannerData') ?? '');
    plannerData && setStartDate(new Date(plannerData.startDate));
    plannerData && setEndDate(new Date(plannerData.endDate));
    plannerData && setCountry(plannerData.country);
    plannerData && setCity(plannerData.city);
    plannerData && setDepartureAirport(plannerData.departureAirport);
    plannerData && setArrivalAirport(plannerData.arrivalAirport);
    plannerData && setFood(plannerData.food);
    plannerData && setAirportTransport(plannerData.airportTransport);
    plannerData && setTravelPlan(plannerData.travelPlan);
    plannerData && setNotes(plannerData.notes);
  }, []);

  const handleStartDate = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDate = (date: Date) => {
    setEndDate(date);
  };

  const handleFoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFood(e.target.value);
  };

  const handleTransportFromAirportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAirportTransport(e.target.value);
  };

  const handleTravelPlanTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTravelPlan(event.currentTarget.value);
  };

  const handleNotesTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.currentTarget.value);
  };

  const savePlanner = () => {
    const plannerData = {
      startDate,
      endDate,
      country,
      city,
      departureAirport,
      arrivalAirport,
      food,
      airportTransport,
      travelPlan,
      notes,
    };

    localStorage.setItem('plannerData', JSON.stringify(plannerData));
    alert('Zapisano dane w localStorage');
  };

  const clearPlannerData = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setCountry('');
    setCity('');
    setDepartureAirport('');
    setArrivalAirport('');
    setFood('Własne');
    setAirportTransport('Taxi');
    setTravelPlan('');
    setNotes('');

    localStorage.setItem('plannerData', JSON.stringify(''));
    alert('Usunięto dane z localStorage');
  };

  return (
    <div className="trip-planner-page content">
      <div className="trip-planner-page__data">
        <label className="label" htmlFor="startDate">
          DATA WYLOTU
        </label>
        <DatePicker id="startDate" className="date-picker mb-3" selected={startDate} onChange={handleStartDate} />
        <label className="label" htmlFor="endDate">
          DATA POWROTU
        </label>
        <DatePicker id="endDate" className="date-picker mb-3" selected={endDate} onChange={handleEndDate} />
        <Input
          name="country"
          id="country"
          value={country}
          labelText="Kraj"
          setState={setCountry}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="city"
          id="city"
          value={city}
          labelText="Miasto"
          setState={setCity}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="departureAirport"
          id="departureAirport"
          value={departureAirport}
          labelText="Lotnisko wylotu"
          setState={setDepartureAirport}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="arrivalAirport"
          id="arrivalAirport"
          value={arrivalAirport}
          labelText="Lotnisko przylotu"
          setState={setArrivalAirport}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <p className="label mb-1">WYŻYWIENIE</p>
        <div className="radio-group">
          <div className="radio-item">
            <input
              type="radio"
              name="food"
              value="Własne"
              id="own"
              checked={food === 'Własne'}
              onChange={handleFoodChange}
            />
            <label className="label" htmlFor="own">
              WŁASNE
            </label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="food"
              value="All Inclusive"
              id="allInclusive"
              checked={food === 'All Inclusive'}
              onChange={handleFoodChange}
            />
            <label className="label" htmlFor="allInclusive">
              ALL INCLUSIVE
            </label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="food"
              value="All Inclusive Soft"
              id="allInclusiveSoft"
              checked={food === 'All Inclusive Soft'}
              onChange={handleFoodChange}
            />
            <label className="label" htmlFor="allInclusiveSoft">
              ALL INCLUSIVE SOFT
            </label>
          </div>
        </div>
        <p className="label mb-1 mt-3">TRANSPORT Z LOTNISKA</p>
        <div className="radio-group">
          <div className="radio-item">
            <input
              type="radio"
              name="airportTransport"
              value="Taxi"
              id="taxi"
              checked={airportTransport === 'Taxi'}
              onChange={handleTransportFromAirportChange}
            />
            <label className="label" htmlFor="taxi">
              TAXI
            </label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="airportTransport"
              value="bus"
              id="bus"
              checked={airportTransport === 'bus'}
              onChange={handleTransportFromAirportChange}
            />
            <label className="label" htmlFor="bus">
              AUTOBUS
            </label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="airportTransport"
              value="train"
              id="train"
              checked={airportTransport === 'train'}
              onChange={handleTransportFromAirportChange}
            />
            <label className="label" htmlFor="train">
              POCIĄG
            </label>
          </div>
          <div className="radio-item">
            <input
              type="radio"
              name="airportTransport"
              value="carRent"
              id="carRent"
              checked={airportTransport === 'carRent'}
              onChange={handleTransportFromAirportChange}
            />
            <label className="label" htmlFor="carRent">
              WYNAJEM AUTA
            </label>
          </div>
        </div>
        <label htmlFor="travelPlan" className="label mt-3">
          ATRAKCJE DO ZWIEDZANIA
        </label>
        <textarea
          name="travelPlan"
          id="travelPlan"
          className="text-area"
          value={travelPlan}
          onChange={handleTravelPlanTextArea}
        />
        <label htmlFor="notes" className="label mt-3">
          NOTATKI
        </label>
        <textarea name="notes" id="notes" className="text-area" value={notes} onChange={handleNotesTextArea} />
        <Button
          text="Zapisz"
          type="button"
          color="yellow"
          hasFixedWidth={true}
          width="xl"
          isDisabled={false}
          onClick={savePlanner}
          additionalClasses="mt-3"
        ></Button>
        <Button
          text="Wyczyść dane"
          type="button"
          color="red"
          hasFixedWidth={true}
          width="xl"
          isDisabled={false}
          onClick={clearPlannerData}
          additionalClasses="mt-3 mb-10"
        ></Button>
      </div>
      <div className="trip-planner-page__image-container">
        <div className="trip-planner-page__image">
          <p>Flamingo!</p>
        </div>
      </div>
    </div>
  );
};
