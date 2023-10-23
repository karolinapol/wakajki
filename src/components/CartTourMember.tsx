import React, { useContext } from 'react';
import { Button } from '../components';
import { ICartCustomersContext, CartCustomersContext } from '../contexts';
import { TourMember } from './CartCustomerData';

interface CartTourMemberProps {
  index: number;
}

export const CartTourMember = ({ index }: CartTourMemberProps): JSX.Element => {
  const { tourMembers, setTourMembers } = useContext(CartCustomersContext) as ICartCustomersContext;

  const updateSingleTourMemberName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTourMembers = [...tourMembers];
    const currentTourMember = updatedTourMembers[index];
    currentTourMember.name = e.currentTarget.value;

    setTourMembers(updatedTourMembers);
  };

  const updateSingleTourMemberSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTourMembers = [...tourMembers];
    const currentTourMember = updatedTourMembers[index];
    currentTourMember.surname = e.currentTarget.value;

    setTourMembers(updatedTourMembers);
  };

  const removeTourMember = () => {
    tourMembers.length > 1 && setTourMembers(tourMembers.filter((_tourMember: TourMember, i: number) => index !== i));
  };

  return (
    <div className="cart-tour-member">
      <h4 className="mt-8 mb-2">Dorosły {index + 1}</h4>
      <label className="label" htmlFor={`name${[index]}`}>
        {'Imię'.toUpperCase()}
      </label>
      <input
        onChange={updateSingleTourMemberName}
        className="input input--lg mb-3"
        type="text"
        name="name"
        value={tourMembers[index].name}
        id={`name${[index]}`}
      ></input>
      <label className="label" htmlFor={`surname${[index]}`}>
        {'Nazwisko'.toUpperCase()}
      </label>
      <input
        onChange={updateSingleTourMemberSurname}
        className="input input--lg"
        type="text"
        name="surname"
        value={tourMembers[index].surname}
        id={`surname${[index]}`}
      ></input>
      <Button
        text="Usuń"
        type="button"
        color="red"
        additionalClasses="mt-2"
        hasFixedWidth={true}
        width="sm"
        isDisabled={tourMembers.length === 1}
        onClick={removeTourMember}
      ></Button>
    </div>
  );
};

export default CartTourMember;
