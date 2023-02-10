import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LayoutContent from '../../layout/Layout'
import './homonym.css'

const Homonym = () => {
  const [data, setData] = useState([]);
  // search bar
  const [text, setText] = useState('');

  // const handleChangText = (e) => {
  //   setText(e.target.value);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(text);
  //   getData()
  // }
  //

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.datamuse.com/words?sl=${text}&md=d`)
      setData(res.data);
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {/* <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input
            type="text" placeholder='Search ...'
            value={text}
            onChange={handleChangText} />
          <button type="submit" className='btnSearch'>Search</button>
        </form>
      </div> */}

      <LayoutContent data={data} />
    </>
  )
}

export default Homonym
