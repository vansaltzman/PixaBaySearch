import axios from 'axios'
import { PIXABAY_KEY } from './config.js'

export const getPhotosByKeyword = function(keyword) {
  return axios.get('https://pixabay.com/api/', {params: {
    q: keyword,
    per_page: 10,
    page: 1,
    key: PIXABAY_KEY,
  }})
}

export const getNextPage = function(keyword, nextPage) {
  return axios.get('https://pixabay.com/api/', {params: {
    q: keyword,
    per_page: 10,
    page: nextPage,
    key: PIXABAY_KEY,
  }})
}