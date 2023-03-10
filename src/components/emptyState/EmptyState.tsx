import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function EmtptyState() {
  return (
    <div className="flex h-half w-full flex-col items-center justify-center">
      <FontAwesomeIcon icon={faMagnifyingGlassMinus} className="text-center text-4xl text-pink-600" />
      <h4 className="m-4 mb-2 mt-24 text-2xl font-medium leading-tight text-pink-600">Data not found!</h4>
    </div>
  );
}

export default EmtptyState;
