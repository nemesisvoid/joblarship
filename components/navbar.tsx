import Logo from './logo';
import NavList from './navigation/nav-list';

const Navbar = () => {
  return (
    <header className='container relative flex items-center justify-between py-10 md:py-12'>
      <Logo />
      <NavList />
    </header>
  );
};

export default Navbar;
