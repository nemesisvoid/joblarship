import Logo from './logo';
import NavList from './navigation/nav-list';

const Navbar = () => {
  return (
    <div
      className='sticky
      top-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out'>
      <header className='container relative flex items-center justify-between py-9'>
        <Logo />
        <NavList />
      </header>
    </div>
  );
};

export default Navbar;
