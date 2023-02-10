export const searchTextChange = (text) => {
    return {
        type: 'search/searchWord',
        payload: text,
    }
}
