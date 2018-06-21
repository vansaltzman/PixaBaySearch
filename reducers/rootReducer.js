import { combineReducers } from 'redux';
import list from './listReducer';

const rootReducer = combineReducers({
  // Split up 'list' reducer into more specific reducers. Structure could be...
  // navigation,
  // search,
  // layout
  list,
})

export default rootReducer