import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function EmtptyState() {
    return (
        <div className='flex flex-col justify-center items-center w-full h-half'>
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} className='text-pink-600 text-4xl text-center' />
            <h4 className="font-medium leading-tight text-2xl mb-2 text-pink-600 m-4 mt-24">Data not found!</h4>
        </div>
    )
}

export default EmtptyState;
