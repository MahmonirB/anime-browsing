import React, { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
    searchText: string | undefined;
    onChangeSearch: (value: string) => void;
}

function SearchBar({ searchText = '', onChangeSearch }: SearchBarProps) {
    return (
        <div className="flex justify-center items-center h-16 bg-indigo-300 w-full fixed">
            <div className="xl:w-96 ">
                <div className="input-group relative flex items-stretch rounded">
                    <input
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-700 focus:outline-none"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeSearch(e.target.value)}
                        value={searchText}
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
