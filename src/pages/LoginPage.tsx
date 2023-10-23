import { useState } from 'react';
import { Input, Button } from '../components';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-page__card">
        <form onSubmit={login}>
          <Input
            placeholder="Wprowadź email"
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
            placeholder="Wprowadź hasło"
            type="password"
            name="haslo"
            id="haslo"
            labelText="Hasło"
            value={password}
            setState={setPassword}
            additionalClasses="mb-6"
            required={true}
            size="lg"
          />
          <Button text="Zaloguj" type="submit" color="yellow" isDisabled={false}></Button>
        </form>
      </div>
    </div>
  );
};
