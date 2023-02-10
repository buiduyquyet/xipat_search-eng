export const searchTextChange = (text) => {
    return {
        type: 'searchWord',
        payload: text,
    }
}