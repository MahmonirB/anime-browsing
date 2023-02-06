import React from 'react';

interface PaginationProps {
    hasNextPage: boolean;
    total: number;
    currentPage: number;
    onChangePage: (value: number) => void;
}

function Pagination({ hasNextPage, total, currentPage, onChangePage }: PaginationProps) {

    const commonClass = 'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 hover:bg-gray-200 focus:shadow-none';
    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation">
                <ul className="flex list-style-none">
                    <li className='page-item'>
                        <button
                            className={`${commonClass} text-gray-800 hover:text-gray-800 ${currentPage - 1 === 0 ? 'text-gray-400 bg-transparent hover:bg-transparent' : ''}`}
                            disabled={currentPage - 1 === 0}
                            onClick={() => onChangePage(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    {currentPage - 1 > 0 && <li className="page-item">
                        <button
                            className={`${commonClass} text-gray-800 hover:text-gray-800 `}
                            onClick={() => onChangePage(currentPage - 1)}>
                            {currentPage - 1}
                        </button>
                    </li>}
                    <li className="page-item active">
                        <button
                            className={`${commonClass} bg-blue-600 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md`}
                            onClick={() => onChangePage(currentPage)}>
                            {currentPage}
                        </button>
                    </li>
                    <li className="page-item">
                        <button
                            className={`${commonClass} text-gray-800 hover:text-gray-800 `}
                            onClick={() => onChangePage(currentPage + 1)}>
                            {currentPage + 1}
                        </button>
                    </li>
                    <li className='page-item'>
                        <button
                            className={`${commonClass} text-gray-800 hover:text-gray-800 ${hasNextPage ? '' : 'text-gray-600'}`}
                            disabled={!hasNextPage}
                            onClick={() => hasNextPage ? onChangePage(currentPage + 1) : null}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;
