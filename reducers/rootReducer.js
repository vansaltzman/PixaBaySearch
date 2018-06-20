import { combineReducers } from 'redux';
import list from './listReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  list,
  search,
})

export default rootReducer