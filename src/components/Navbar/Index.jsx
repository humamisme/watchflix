import { Link } from 'react-router-dom';
import Switcher from './Switcher';

function Navbar() {
  return (
    <div className="sticky z-10 flex bg-gray-50 shadow-md dark:bg-dark-2">
      <nav className="container flex items-center p-4 sm:px-8 lg:px-12">
        <Link to="/" className="sm:mr-8 lg:mr-12">
          <img
            src="/watchflix.svg"
            alt="logo"
            className="block h-8 sm:hidden"
          />
          <h1 className="hidden text-3xl font-bold text-primary sm:block">
            Watchflix
          </h1>
        </Link>
        <Switcher />
      </nav>
    </div>
  );
}

export default Navbar;
