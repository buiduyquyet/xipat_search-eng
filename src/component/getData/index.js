import axios from "axios";

export const getData = async (searchText, type, setData) => {
    try {
        const res = await axios.get(`https://api.datamuse.com/words?${type}=${searchText}&md=d`)
        setData(res.data);
    } catch (error) {
        console.error("Error: ", error)
    }
}
