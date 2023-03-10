import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function Spinner() {
  return (
    <div className="absolute flex h-screen w-screen flex-col items-center justify-center">
      <FontAwesomeIcon icon={faSpinner} className="animate-spin" size="2xl" />
    </div>
  );
}

export default Spinner;
