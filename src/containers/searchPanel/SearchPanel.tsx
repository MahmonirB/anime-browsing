import React from 'react';
import { Link } from 'react-router-dom';

function SearchPanel({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <div className="py-12 md:flex md:h-half md:py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-5 text-3xl font-medium md:text-4xl">Get list of Animations, find the newest.</h1>
          {!isAuthenticated ? (
            <Link to={'/signin'} className="mt-6 rounded-full bg-indigo-600 py-2 px-6 text-xl text-white">
              Get Started
            </Link>
          ) : (
            <Link to={'/profile'} className="mt-6 rounded-full bg-indigo-600 py-2 px-6 text-xl text-white">
              Profile
            </Link>
          )}
        </div>
        <div className="h-40 bg-[url('/img/landing.png')] bg-contain bg-center bg-no-repeat md:h-40" />
      </div>
    </div>
  );
}

export default SearchPanel;
