import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getData } from '../../component/getData';
import LayoutContent from '../../layout/Layout'
import { searchTextSelector } from '../../redux/selectors';

const Rhyme = () => {
    const [data, setData] = useState([]);
    const searchText = useSelector(searchTextSelector)

    useEffect(() => {
        getData(searchText, 'sp', setData);
    }, [searchText])

    return (
        <LayoutContent data={data} />
    )
}

export default Rhyme
