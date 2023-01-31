import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Spinner() {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen absolute'>
            <FontAwesomeIcon icon={faSpinner} className='spinner' size='2xl' />
        </div>
    );
}

export default Spinner;