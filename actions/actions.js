import actionTypes from './types'
import { getPhotosByKeyword, getNextPage } from '../utilities/pixabay'

// Perform Search
export function searchByKeyword(keyword) {
  if (keyword && keyword !== '') {
    return (dispatch) => {
      dispatch(toggleLoadingSearch(true))
      return getPhotosByKeyword(keyword)
      .then(res => {
        dispatch(searchByKeywordAction(res.data.hits, keyword))
        dispatch(toggleLoadingSearch(false))
      })
      .catch(err => {
        console.log('Error with search! ', err)
        toggleLoadingSearch(false)
      })
    }
  }
}

function searchByKeywordAction(photos, keyword) {
  return {
    type: actionTypes.SEARCH_BY_KEYWORD,
    photos,
    keyword
  }
}

//Toggle Loading
function toggleLoadingPhotos(boolean) {
  return {
    type: actionTypes.TOGGLE_LOADING_PHOTOS,
    boolean
  }
}

function toggleLoadingSearch(boolean) {
  return {
    type: actionTypes.TOGGLE_LOADING_SEARCH,
    boolean
  }
}

// Load More Photos
export function loadMorePhotos(keyword, currentPage) {
  return (dispatch => {
    toggleLoadingPhotos(true)
    getNextPage(keyword, currentPage + 1)
    .then(res => {
      toggleLoadingPhotos(false)
      dispatch(loadMorePhotosAction(res.data))
    })
    .catch(err => {
      toggleLoadingPhotos(false)
      console.log(err)
    })
  })
}

function loadMorePhotosAction(photos) {
  return {
    type: actionTypes.LOAD_MORE_PHOTOS,
    photos
  }
}

// Show Details
export function showDetail(photoObject) {
  return {
    type: actionTypes.SHOW_DETAIL,
    photoObject
  }
}

// Hide Details
export function hideDetail() {
  return {
    type: actionTypes.HIDE_DETAIL,
  }
}

// Change Orientation
export function setLayout(e) {
  let layoutObj = e.nativeEvent.layout
  return {
    type: actionTypes.SET_LAYOUT,
    newLayout: layoutObj
  }
}