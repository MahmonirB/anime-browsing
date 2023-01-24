import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => setShowNavbar(prev => !prev);

  return (
    <div className="header-2">
      <nav className="bg-white py-5 md:py-4">
        <div className="w-full md:mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center ml-3">
            <a href="#" className="font-bold text-xl text-indigo-600">
              AnimeSuche
            </a>
            <button
              onClick={toggleNavbar}
              className=" border-none px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <div
            className={`md:flex flex-col md:flex-row md:ml-auto mt-2 p-2 md:mt-0 w-full bg-white absolute md:relative md:w-1/2 transition duration-900 ${
              showNavbar ? 'flex' : 'hidden'
            }`}
            id="navbar-collapse"
          >
            <a
              href="#"
              className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Genres
            </a>
            <a
              href="#"
              className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Studio
            </a>
            <a
              href="#"
              className="p-1 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Contact
            </a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">
              Home
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
