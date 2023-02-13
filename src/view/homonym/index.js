import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LayoutContent from '../../layout/Layout'
import { searchTextSelector } from '../../redux/selectors';
import { getData } from '../../component/getData';

const Homonym = () => {
  const [data, setData] = useState([]);
  const searchText = useSelector(searchTextSelector);

  useEffect(() => {
    getData(searchText, 'sl', setData);
  }, [searchText])

  return (
    <>
      <LayoutContent data={data} />
    </>
  )
}

export default Homonym
