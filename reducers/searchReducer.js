import * as actionTypes from '../actions/types'

const DEFAULT_STATE = {
  keyword: null,
  page: 0,
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    // case actionTypes.:
    //   return {...state, property: newState}
    default:
      return state
  }
}