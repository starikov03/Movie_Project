import {
	SET_NEW_CURRENT_PAGE,
	LOG_IN,
	LOG_OUT,
	FORM_AUTHORIZATION_CLOSE,
	FORM_AUTHORIZATION_OPEN,
	ADD_FAVORITE_LIST,
	REMOVE_FAVORITE_LIST,
	ADD_TO_READ_LIST,
	REMOVE_TO_READ_LIST,
	SORT_FAVORITE_LIST,
	SORT_TO_READ_LIST,
} from './actions';
import { saveStorageAuthorizationStatus } from '@utilities/sessionStorage';
import { saveStorageFavoriteFilms, saveStorageToReadFilms } from '@utilities/localStorage';
import { DEFAULT_AUTHORIZATION_STATUS, DEFAULT_FAVORITE_LIST, DEFAULT_TO_READ_LIST } from '@constants/Constants';


const initialState = {
	isAuthorized: DEFAULT_AUTHORIZATION_STATUS,
	FAVORITE_LIST: DEFAULT_FAVORITE_LIST,
	TO_READ_LIST: DEFAULT_TO_READ_LIST,
	isFormAuthorizationOpen: false,
	currentPage: 1,
}


function setCurrentPage(state, action) {
	switch (action.type) {
		case SET_NEW_CURRENT_PAGE:
			return action.newCurrentPage;
		default:
			return state;
	}
}


function setNewFavoriteList(state, action) {
	let newList = [];
	switch (action.type) {
		case ADD_FAVORITE_LIST:
			newList = [...state, action.filmObject];
			saveStorageFavoriteFilms(newList);
			return newList;
		case REMOVE_FAVORITE_LIST:
			newList = [...state];
			newList.splice(newList.indexOf(action.filmObject, 0), 1);
			saveStorageFavoriteFilms(newList);
			return newList;
		case SORT_FAVORITE_LIST:
			return action.sortedList;
		default:
			return state;
	}
}


function setNewToReadList(state, action) {
	let newList = [];
	switch (action.type) {
		case ADD_TO_READ_LIST:
			newList = [...state, action.filmObject];
			saveStorageToReadFilms(newList);
			return newList;
		case REMOVE_TO_READ_LIST:
			newList = [...state];
			newList.splice(newList.indexOf(action.filmObject, 0), 1);
			saveStorageToReadFilms(newList);
			return newList;
		case SORT_TO_READ_LIST:
			return action.sortedList;
		default:
			return state;
	}
}


function setAuthorizationStatus(state, action) {
	switch (action.type) {
		case LOG_IN:
			saveStorageAuthorizationStatus(true);
			return true;
		case LOG_OUT:
			saveStorageAuthorizationStatus(false);
			return false;
		default:
			return state;
	}
}


function setFormAuthorizationOpen(state, action) {
	switch (action.type) {
		case FORM_AUTHORIZATION_OPEN:
			return true;
		case FORM_AUTHORIZATION_CLOSE:
			return false;
		default:
			return state;
	}
}


function MovieApp(state = initialState, action) {
	return {
		isAuthorized: setAuthorizationStatus(state.isAuthorized, action),
		FAVORITE_LIST: setNewFavoriteList(state.FAVORITE_LIST, action),
		TO_READ_LIST: setNewToReadList(state.TO_READ_LIST, action),
		isFormAuthorizationOpen: setFormAuthorizationOpen(state.isFormAuthorizationOpen, action),
		currentPage: setCurrentPage(state.currentPage, action),
	}
}

export default MovieApp;