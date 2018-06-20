import {combineReducers} from 'redux';
import list from './listReducer';
import search from './searchReducer';

const RootReducer = combineReducers({
  list,
  search,
})

export default RootReducer