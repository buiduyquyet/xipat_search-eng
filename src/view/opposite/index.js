import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LayoutContent from '../../layout/Layout'

const Opposite = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://api.datamuse.com/words?rel_ant=ocean&md=d')
                setData(res.data);
                // console.log(res.data)
            } catch (error) {
                console.error("Error: ", error)
            }
        }
        getData();
    }, [])

    return (
        <LayoutContent data={data} />
    )
}

export default Opposite
