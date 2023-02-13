const initState = { searchText: '' }

const SearchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'search/searchWord':
            return {
                ...state,
                searchText: action.payload,
            }
        default:
            return state;
    }
}

export default SearchReducer;