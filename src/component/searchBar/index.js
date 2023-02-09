import React, { useState } from 'react'
import './search-bar.css'

const SearchBar = () => {
    const [text, setText] = useState('');
    const handleChangeText = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    return (
        <div className='search-bar'>
            <form >
                <input type="text" value={text} onChange={handleChangeText} placeholder='Search ...' />
                <button type="submit" className='btnSearch'>Search</button>
            </form>

        </div>
    )
}

export default SearchBar
