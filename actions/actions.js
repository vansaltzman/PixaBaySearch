import actionTypes from './types'
import { getPhotosByKeyword, getNextPage } from '../utilities/pixabay'

// Perform Search
export function searchByKeyword(keyword) {
  return (dispatch) => {
    dispatch(toggleLoading(true))
    return getPhotosByKeyword(keyword)
    .then(res => {
      console.log('got photos')
      dispatch(searchByKeywordAction(res.data.hits))
      dispatch(toggleLoading(false))
    })
    .catch(() => {
      toggleLoading(false)
    })
  }
}

function searchByKeywordAction(photos) {
  console.log('photos ------> ', photos)
  return {
    type: actionTypes.SEARCH_BY_KEYWORD,
    photos
  }
}

//Toggle Loading
function toggleLoading(boolean) {
  console.log('loading = ' + boolean)
  return {
    type: actionTypes.TOGGLE_LOADING,
    boolean
  }
}

// Load More Photos
export function loadMorePhotos(keyword, nextPage) {
  return (dispatch => {
    getNextPage(keyword, nextPage)
    .then(res => {
      dispatch(loadMorePhotosAction(res.data))
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

// Save Scroll Position ???

// Change Orientation ??? 