export const SORT_POPULARITY_DESCENDING = 'SORT_POPULARITY_DESCENDING';
export const SORT_POPULARITY_ASCENDING = 'SORT_POPULARITY_ASCENDING';
export const SORT_RATING_DESCENDING = 'SORT_RATING_DESCENDING';
export const SORT_RATING_ASCENDING = 'SORT_RATING_ASCENDING';
export const SET_NEW_CURRENT_PAGE = 'SET_NEW_CURRENT_PAGE';
export const ADD_NEW_ACTIVE_GENER = 'ADD_NEW_ACTIVE_GENER';
export const DELETE_ACTIVE_GENER = 'DELETE_ACTIVE_GENER';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ADD_FAVORITE_LIST = 'ADD_FAVORITE_LIST';
export const REMOVE_FAVORITE_LIST = 'REMOVE_FAVORITE_LIST';
export const ADD_TO_READ_LIST = 'ADD_TO_READ_LIST';
export const REMOVE_TO_READ_LIST = 'REMOVE_TO_READ_LIST';
export const FORM_AUTHORIZATION_OPEN = "FORM_AUTHORIZATION_OPEN";
export const FORM_AUTHORIZATION_CLOSE = "FORM_AUTHORIZATION_CLOSE";



export function sortPopularityDescendingList() {
  return { type: SORT_POPULARITY_DESCENDING }
}

export function sortPopularityAscendingList() {
  return { type: SORT_POPULARITY_ASCENDING }
}

export function sortRatingDescendingList() {
  return { type: SORT_RATING_DESCENDING }
}

export function sortRatingAscendingList() {
  return { type: SORT_RATING_ASCENDING }
}

export function setNewCurrentPage(newCurrentPage) {
  return { type: SET_NEW_CURRENT_PAGE, newCurrentPage }
}

export function addActiveGener(newActiveGener) {
  return { type: ADD_NEW_ACTIVE_GENER, newActiveGener }
}

export function deleteActiveGener(activeGener) {
  return { type: DELETE_ACTIVE_GENER, activeGener }
}

export function logIn() {
  return { type: LOG_IN }
}

export function logOut() {
  return { type: LOG_OUT }
}

export function addFavoriteList(filmObject) {
  return { type: ADD_FAVORITE_LIST, filmObject };
}

export function removeFavoriteList(filmObject) {
  return { type: REMOVE_FAVORITE_LIST, filmObject };
}

export function addToReadList(filmObject) {
  return { type: ADD_TO_READ_LIST, filmObject };
}

export function removeToReadList(filmObject) {
  return { type: REMOVE_TO_READ_LIST, filmObject };
}

export function formAuthorizationOpen() {
  return { type: FORM_AUTHORIZATION_OPEN }
}

export function formAuthorizationClose() {
  return { type: FORM_AUTHORIZATION_CLOSE }
}




