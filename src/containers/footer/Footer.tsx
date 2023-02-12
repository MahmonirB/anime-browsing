import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-center text-white bg-indigo-900">
            <div className="p-6">
                <div className="">
                    <p className="flex justify-center items-center">
                        <span className="mr-4">Join us in a few seconds:</span>
                        <Link to='/signin' type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Sign in!
                        </Link>
                    </p>
                </div>
            </div>

            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className="text-white" href="https://github.com/MahmonirB">github</a>
            </div>
        </footer>
    )
}
export default Footer;
