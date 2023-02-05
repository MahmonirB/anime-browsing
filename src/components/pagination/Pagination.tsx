import React from 'react';

function Pagination({ hasNextPage, total, currentPage, onChangePage }: any) {
    console.log(currentPage)
    return (
        <div className="flex justify-center">
            <nav aria-label="Page navigation">
                <ul className="flex list-style-none">
                    <li className='page-item'>
                        <button
                            className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${currentPage - 1 === 0 ? 'text-gray-400 bg-transparent' : ''}`}
                            aria-disabled={currentPage - 1 === 0 ? true : false}
                            onClick={() => onChangePage(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    {currentPage - 1 > 0 && <li className="page-item"><button
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        onClick={() => onChangePage(currentPage - 1)}>{currentPage - 1}</button></li>}
                    <li className="page-item active"><button
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                        onClick={() => onChangePage(currentPage)}>
                        {currentPage}
                    </button>
                    </li>
                    <li className="page-item"><button
                        className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                        onClick={() => onChangePage(currentPage + 1)}>
                        {currentPage + 1}
                    </button>
                    </li>
                    <li className='page-item'>
                        <button
                            className={`page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ${hasNextPage ? '' : 'text-gray-600'}`}
                            aria-disabled={hasNextPage ? false : true}
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
