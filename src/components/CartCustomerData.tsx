import { CartTourMember, Input, Button } from '../components';
import { useContext } from 'react';
import { ICartCustomersContext, CartCustomersContext } from '../contexts';

export interface TourMember {
  name: string;
  surname: string;
}

export interface CustomerData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export const CartCustomerData = (): JSX.Element => {
  const {
    tourMembers,
    setTourMembers,
    customerName,
    setCustomerName,
    customerSurname,
    setCustomerSurname,
    customerEmail,
    setCustomerEmail,
    customerPhoneNumber,
    setCustomerPhoneNumber,
  } = useContext(CartCustomersContext) as ICartCustomersContext;

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
          name="customerName"
          id="customerName"
          value={customerName}
          labelText="Imię"
          setState={setCustomerName}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="customerSurname"
          id="customerSurname"
          value={customerSurname}
          labelText="Nazwisko"
          setState={setCustomerSurname}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="text"
        />
        <Input
          name="customeremail"
          id="customeremail"
          value={customerEmail}
          labelText="Email"
          setState={setCustomerEmail}
          additionalClasses="mb-3"
          required={true}
          size="lg"
          type="email"
        />
        <Input
          name="customerPhoneNumber"
          id="customerPhoneNumber"
          value={customerPhoneNumber}
          labelText="Telefon"
          setState={setCustomerPhoneNumber}
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
          isDisabled={tourMembers.length > 5}
          onClick={onAddTourMember}
        ></Button>
      </div>
    </div>
  );
};

export default CartCustomerData;
