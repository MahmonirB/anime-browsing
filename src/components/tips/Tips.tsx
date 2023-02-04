import React from 'react';

interface Tips {
    title: string;
    size: 'small' | 'medium' | 'large';
    type?: 'primary' | 'secondary' | 'ghost' | 'outline';
}

const typeClass = {
    primary: 'bg-indigo-400 text-white',
    secondary: 'bg-white text-amber-800 border border-amber-800 ',
    outline: 'bg-white text-indigo-400 border border-indigo-400',
    ghost: 'bg-white text-indigo-400',
};

function Tips({ title, size, type = 'primary' }: Tips) {
    const tips = {
        small: <div className={`w-16 h-6 rounded-xl text-center ${typeClass[type]}`}>
            <label className='text-xs'>{title}</label>
        </div>,

        medium: <div className={`w-28 h-8 rounded-xl text-center pt-1 ${typeClass[type]}`}>
            <label className='text-sm font-semibold'>{title}</label>
        </div>,

        large: <div className={`w-40 h-12 rounded-xl text-center pt-3 ${typeClass[type]}`}>
            <label className='text-base font-semibold'>{title}</label>
        </div>
    }

    return tips[size];
}

export default Tips;
