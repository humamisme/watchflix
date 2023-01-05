import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as HamburgerIcon } from '../../assets/menu-hamburger.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import useModalWindow from '../../hooks/useModalWindow';
import Button from '../Button';
import Switcher from './Switcher';
import UserDropdown from './UserDropdown';
import SearchBox from './SearchBox';

const navMenus = [
  { name: 'Home', path: '/home' },
  { name: 'Movies', path: '/movie' },
  { name: 'TV Shows', path: '/tv' },
];

function Navbar() {
  const [searchBoxOpen, setSearchBoxOpen, searchBoxRef] = useModalWindow(false);
  const [navMenuOpen, setNavMenuOpen, navMenuRef] = useModalWindow(false);

  const handleSearchButtonClick = () => {
    setSearchBoxOpen(!searchBoxOpen);
  };

  const handleNavMenuButtonClick = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  useEffect(() => {
    if (searchBoxOpen || navMenuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [searchBoxOpen, navMenuOpen]);

  return (
    <div className="sticky top-0 z-10 flex bg-gray-50 shadow-md dark:bg-dark-2">
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
        <div
          className={`fixed top-0 h-full w-full p-4 transition-all ease-in-out md:static md:border-none md:p-0 md:shadow-none ${
            navMenuOpen
              ? 'left-0 before:fixed before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-500/30 before:backdrop-blur-sm before:content-[""] md:before:hidden'
              : 'left-full'
          }`}
        >
          <div
            className="relative ml-auto flex max-w-sm flex-col items-center space-y-4 rounded-xl border bg-gray-50 p-4 shadow dark:border-gray-700 dark:bg-dark-2 md:max-w-full md:flex-row md:space-y-0 md:space-x-3 md:border-none md:p-0 md:shadow-none"
            ref={navMenuRef}
          >
            <Button
              className="self-end p-0 md:hidden"
              onClick={handleNavMenuButtonClick}
              aria-label="close"
            >
              <CrossIcon />
            </Button>
            <ul className="flex flex-col items-center space-y-3 text-lg font-semibold md:flex-row md:space-y-0 md:space-x-4 lg:space-x-6">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      'relative p-1 transition-all after:absolute after:bottom-0 after:left-0 after:h-[3px] after:rounded after:bg-primary after:transition-all after:content-[""] hover:text-primary ' +
                      (isActive ? 'text-primary after:w-full' : 'after:w-0 ')
                    }
                    onClick={() => {
                      setNavMenuOpen(false);
                    }}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Button
              className="!ml-auto hidden md:block lg:flex lg:w-full lg:max-w-[256px] lg:bg-gray-200/90 lg:dark:bg-gray-600/50"
              onClick={handleSearchButtonClick}
              aria-label="search toggle"
            >
              <SearchIcon />
              <span className="ml-2 hidden text-gray-300 lg:inline">
                Search
              </span>
            </Button>
            <UserDropdown />
            <div className="flex w-full justify-around border-t border-gray-300 pt-4 dark:border-gray-700 md:w-fit md:border-l md:border-t-0 md:pl-4 md:pt-0">
              <span className="md:hidden">Switch mode: </span>
              <Switcher />
            </div>
          </div>
        </div>
        <div className="ml-auto flex space-x-2 md:hidden">
          <Button onClick={handleSearchButtonClick} aria-label="search toggle">
            <SearchIcon />
          </Button>
          <Button
            onClick={handleNavMenuButtonClick}
            aria-label="Menu toggle button"
          >
            <HamburgerIcon />
          </Button>
        </div>
      </nav>
      <div
        className={`fixed top-0 h-full w-full p-4 transition-all ease-in-out ${
          searchBoxOpen
            ? 'left-0 before:fixed before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-500/30 before:backdrop-blur-sm before:content-[""]'
            : 'left-full'
        }`}
      >
        <div
          className="relative m-auto flex max-w-7xl flex-col space-y-4 rounded-xl border bg-gray-50 p-4 shadow dark:border-gray-700 dark:bg-dark-2"
          ref={searchBoxRef}
        >
          <Button
            className="self-end p-0"
            onClick={handleSearchButtonClick}
            aria-label="close"
          >
            <CrossIcon />
          </Button>
          <SearchBox />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
