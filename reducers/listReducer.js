import actionTypes from '../actions/types.js'

const DEFAULT_STATE = {
  photos: [],
  selectedPhoto: null, // Should be a photoObj or null
  loadingPhotos: false,
  loadingSearch: false,
  currentPage: null,
  scrollPos: null, // Not sure if needed using FlatList
  keyword: null,
  layout: {x: 0, y: 0, width: 100, height: 100},
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.TOGGLE_LOADING_PHOTOS:
      return {...state, loadingPhotos: action.boolean || !state.loadingPhotos}
    case actionTypes.TOGGLE_LOADING_SEARCH:
      return {...state, loadingSearch: action.boolean || !state.loadingSearch}
    case actionTypes.SEARCH_BY_KEYWORD:
      return {...state, photos: action.photos, currentPage: 1, selectedPhoto: null, keyword: action.keyword}
    case actionTypes.LOAD_MORE_PHOTOS:
      return {...state, photos: [...state.photos, ...action.photos.hits], currentPage: state.currentPage + 1}
    case actionTypes.SHOW_DETAIL:
      return {...state, selectedPhoto: action.photoObject}
    case actionTypes.HIDE_DETAIL:
      return {...state, selectedPhoto: null}
    case actionTypes.SET_LAYOUT:
      return {...state, layout: action.newLayout}
    default:
      return state
  }
}