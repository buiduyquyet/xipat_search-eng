import { createStore } from 'redux';
import SearchReducer from '../component/searchBar/SearchSlice';

const store = createStore(SearchReducer);

export default store;