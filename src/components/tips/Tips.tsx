import React from 'react';

interface Tips {
  title: string;
  size: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'ghost' | 'outline';
}

const typeClass = {
  primary: 'bg-indigo-400 text-white',
  secondary: 'bg-white text-amber-800 border border-amber-800 ',
  outline: 'bg-white text-indigo-400 dark:text-indigo-200 border border-indigo-400',
  ghost: 'bg-white text-indigo-400 dark:text-indigo-200',
};

function Tips({ title, size, type = 'primary' }: Tips) {
  const tips = {
    small: (
      <div className={`h-6 w-16 rounded-xl py-1 text-center ${typeClass[type]}`}>
        <label className="text-xs">{title}</label>
      </div>
    ),

    medium: (
      <div className={`h-8 w-28 rounded-xl py-1 pt-1 text-center ${typeClass[type]}`}>
        <label className="text-sm font-semibold">{title}</label>
      </div>
    ),

    large: (
      <div className={`h-12 w-40 rounded-xl py-1 pt-3 text-center ${typeClass[type]}`}>
        <label className="text-base font-semibold">{title}</label>
      </div>
    ),
  };

  return tips[size];
}

export default Tips;
