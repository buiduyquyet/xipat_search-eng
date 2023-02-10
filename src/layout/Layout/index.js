import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Pagination from '../../component/pagination';
import { searchTextChange } from '../../redux/action';

const LayoutContent = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const wordsPerPage = 10;

    const indexOfLastPost = currentPage * wordsPerPage;
    const indexOfFirstPost = indexOfLastPost - wordsPerPage;
    const currentWords = data.slice(indexOfFirstPost, indexOfLastPost).sort((a, b) => b.score - a.score);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const dispatch = useDispatch();

    return (
        <div className='layout-content'>
            {/* <h3>Các từ tìm được: </h3> */}
            {
                currentWords.length === 0 ? <p>Not data</p>
                    : (
                        currentWords.map((item, index) => (
                            <div className='content' key={index}>
                                <p className='content-word' onClick={() => dispatch(searchTextChange(item.word))}><span>{index + 1}</span>. {item.word}</p>
                                <span>Score: {item.score ? item.score : 'not have score'}</span>
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
