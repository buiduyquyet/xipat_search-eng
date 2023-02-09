import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LayoutContent from '../../layout/Layout'

const RelatedAdjectives = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('https://api.datamuse.com/words?rel_jjb=ocean')
                setData(res.data);
            } catch (error) {
                console.error("Error: ", error)
            }
        }
        getData();
    }, [])
    return (
        <>
            {
                data.map((item, i) => (
                    <LayoutContent index={i + 1} word={item.word} content={item.score} />
                ))
            }
        </>
    )
}

export default RelatedAdjectives