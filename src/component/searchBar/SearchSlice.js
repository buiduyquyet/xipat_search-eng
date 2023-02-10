const initState = { searchText: '' }

const SearchReducer = (state = initState, action) => {
    console.log({ state, action })
    switch (action.type) {
        case 'searchWord':
            console.log(action.payload)
            return {
                ...state,
                searchText: action.payload,

            }
        default:
            return state;
    }
}

export default SearchReducer;