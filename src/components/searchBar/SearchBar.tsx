import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  searchText: string | undefined;
  onChangeSearch: (value: string) => void;
}

function SearchBar({ searchText = '', onChangeSearch }: SearchBarProps) {
  return (
    <div className="fixed flex h-16 w-full items-center justify-center bg-indigo-300">
      <div className="xl:w-96 ">
        <div className="input-group relative flex items-stretch rounded">
          <input
            type="search"
            className="form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-indigo-700 focus:bg-white focus:text-gray-700 focus:outline-none"
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)}
            value={searchText}
            placeholder="Search"
            aria-label="Search"
          />
          <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
