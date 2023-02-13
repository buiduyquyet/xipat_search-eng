import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import SearchReducer from './slice/SearchSlice';

const composedEnhancers = composeWithDevTools();

const store = createStore(SearchReducer, composedEnhancers);

export default store;