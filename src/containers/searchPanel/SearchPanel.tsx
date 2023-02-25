import React from 'react';
import { Link } from 'react-router-dom';

function SearchPanel() {
  return (
    <div className="py-12 md:py-12 md:flex md:h-half">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium mb-5">Get list of Animations, find the newest.</h1>
          {/* <a href="http://localhost:3001/login" className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get Started</a> */}
          <Link to="/signin" className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get Started</Link>
        </div>
        <div className="bg-[url('/img/landing.png')] bg-contain bg-no-repeat bg-center h-40 md:h-40" />
      </div>
    </div>
  );
}

export default SearchPanel;
