import React from 'react';

function Header() {
    return (
        <div className='flex w-full align-baseline h-16 md:w-auto flex-row py-3 px-6 border-b border-b-gray-100 shadow-md shadow-slate-50 '>
            <div className='w-1/2'><p className='text-cyan-900 text-2xl font-black hover:text-cyan-700 cursor-pointer'>Anime Info</p></div>
            <div className='w-1/6'><p className='text-cyan-900 font-semibold hover:text-cyan-700 cursor-pointer'>Home</p></div>
            <div className='w-1/6'><p className='text-cyan-900 font-semibold hover:text-cyan-700 cursor-pointer'>About</p></div>
            <button className='w-1/6 h-9 bg-cyan-700 text-white font-medium hover:text-cyan-700 hover:bg-white hover:border hover:border-cyan-700'>collections</button>
        </div>
    );
}

export default Header;
