import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => setShowNavbar(prev => !prev);

  const linkClasses =
    'p-1 lg:px-4 md:mx-2 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300';

  return (
    <div className="header-2">
      <nav className="bg-white py-5  dark:bg-stone-800 md:py-4">
        <div className="w-full md:mx-auto md:flex md:items-center">
          <div className="ml-3 flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-indigo-900 dark:text-indigo-500">
              AnimeSuche
            </a>
            <button
              onClick={toggleNavbar}
              className=" rounded border-none px-3 py-1 text-gray-600 opacity-50 hover:opacity-75 dark:text-gray-300 md:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div
            className={`duration-900 absolute mt-2 w-full flex-col items-center bg-white p-2 transition dark:border-b dark:bg-stone-800 md:relative md:ml-auto md:mt-0 md:flex md:w-1/2 md:flex-row ${
              showNavbar ? 'flex' : 'hidden'
            }`}
            id="navbar-collapse"
          >
            <a href="#" className={linkClasses}>
              About
            </a>
            <Link to="/genres" className={linkClasses}>
              Genres
            </Link>
            <Link to="/media" className={linkClasses}>
              Media
            </Link>
            <a href="#" className={linkClasses}>
              Contact
            </a>
            <a href="#" className="rounded bg-indigo-900 p-2 text-white dark:text-gray-300 md:mx-2 lg:px-4">
              Home
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
