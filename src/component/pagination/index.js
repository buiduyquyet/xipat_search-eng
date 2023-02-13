import React from 'react'
import { Link } from 'react-router-dom';
import './pagination.scss'

const Pagination = ({ wordsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / wordsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <Link
                                onClick={() => paginate(number)}
                                to={number} className={`page-link ${currentPage === number ? "active" : ""}`}
                            >
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination
