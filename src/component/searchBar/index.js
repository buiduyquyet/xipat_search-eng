import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './search-bar.css'
import { searchTextChange } from '../../redux/action'

const SearchBar = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChangText = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchTextChange(text));
    }


    return (
        <div className='search-bar'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder='Search ...'
                    value={text}
                    onChange={handleChangText} />
                <button type="submit" className='btnSearch'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
