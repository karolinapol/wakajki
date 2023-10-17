import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="container mb-10">
      <div className="content navbar">
        <a className="navbar__logo" href="/">
          <Logo />
        </a>
        <div className="navbar__items">
          <div className="navbar__items--left">
            <div className="navbar__item">
              <NavLink to="/">Wycieczki</NavLink>
            </div>
          </div>
          <div className="navbar__items--right">
            <div className="navbar__item navbar__item--with-icon mr-4">
              <img src="/icons/logout.svg" alt="log out"></img>
              <NavLink to="/login">Wyloguj</NavLink>
            </div>
            <div className="navbar__item navbar__item--with-icon">
              <img src="/icons/cart.svg" alt="holiday basket"></img>
              <NavLink to="/cart">Koszyk</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
