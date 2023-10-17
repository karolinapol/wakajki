import Logo from './Logo';

export const Navbar = (): JSX.Element => {
  return (
    <nav className="container navbar">
      <div className="content navbar">
        <a className="navbar__logo" href="/">
          <Logo />
        </a>
        <a href="/">Wycieczki</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
