import actionTypes from './types'
import { getPhotosByKeyword, getNextPage } from '../utilities/pixabay'

// Perform Search
export function searchByKeyword(keyword) {
  return (dispatch => {
    getPhotosByKeyword(keyword)
    .then(res => {
      dispatch(searchByKeywordAction(res.data))
    })
  })
}

function searchByKeywordAction(photos) {
  return {
    type: actionTypes.SEARCH_BY_KEYWORD,
    photos
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