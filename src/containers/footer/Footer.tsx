import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-indigo-900 text-center text-white">
      <div className="p-6">
        <div className="">
          <p className="flex items-center justify-center">
            <span className="mr-4">Join us in a few seconds:</span>
            <Link
              to="/signin"
              type="button"
              className="inline-block rounded-full border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            >
              Sign in!
            </Link>
          </p>
        </div>
      </div>

      <div className="p-4 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-white" href="https://github.com/MahmonirB">
          github
        </a>
      </div>
    </footer>
  );
}
export default Footer;
