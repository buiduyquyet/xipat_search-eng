import React, { useEffect, useState } from 'react'
import Pagination from '../../component/pagination';

const LayoutContent = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const wordsPerPage = 10;

    const indexOfLastPost = currentPage * wordsPerPage;
    const indexOfFirstPost = indexOfLastPost - wordsPerPage;
    const currentWords = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='layout-content'>
            {/* <h3>Các từ tìm được: </h3> */}
            {
                currentWords.length === 0 ? <p>Not data</p>
                    : (
                        currentWords.map((item, index) => (
                            <div className='content' key={index}>
                                <p className='content-word'><span>{index + 1}</span>. {item.word}</p>
                                <p className='content-detail'>{item.defs ? item.defs : "Not have define"}</p>
                            </div>
                        ))
                    )
            }
            <Pagination
                wordsPerPage={wordsPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </div>
    )
}

export default LayoutContent
