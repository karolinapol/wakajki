import { CartTourMember, Input, Button } from '../components';
import React, { useContext } from 'react';
import { ITourMembersContext, TourMembersContext } from '../contexts/TourMembersContext';

export interface TourMember {
  name: string;
  surname: string;
}

export const CartCustomerData = (): JSX.Element => {
  const { tourMembers, setTourMembers } = useContext(TourMembersContext) as ITourMembersContext;

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const onAddTourMember = () => {
    if (
      tourMembers.length < 6 &&
      tourMembers[tourMembers.length - 1].name !== '' &&
      tourMembers[tourMembers.length - 1].surname !== ''
    )
      setTourMembers([
        ...tourMembers,
        {
          name: '',
          surname: '',
        },
      ]);
  };

  return (
    <div className="cart-custmer-data">
      <div className="cart-customer-data__customer">
        <h2 className="mb-5">Podaj dane osoby rezerwującej</h2>
        <Input
          name="name"
          id="name"
          value={name}
          labelText="Imię"
          setState={setName}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="surname"
          id="surname"
          value={surname}
          labelText="Nazwisko"
          setState={setSurname}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="email"
          id="email"
          value={email}
          labelText="Email"
          setState={setEmail}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="email"
        />
        <Input
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          labelText="Telefon"
          setState={setPhoneNumber}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
      </div>
      <div className="cart-customer-data__tour-member">
        <h2 className="mt-10 mb-5">Podaj dane uczestników wycieczki</h2>
        {tourMembers.map((_tourMember: TourMember, index: number) => {
          return <CartTourMember key={index} index={index}></CartTourMember>;
        })}

        <Button
          text="Dodaj kolejną osobę"
          type="button"
          color="yellow"
          additionalClasses="mt-8"
          hasFixedWidth={true}
          width="lg"
          isDisabled={false}
          onClick={onAddTourMember}
        ></Button>
      </div>
    </div>
  );
};

export default CartCustomerData;
