import {
	SET_NEW_CURRENT_PAGE,
	LOG_IN,
	LOG_OUT,
} from './actions';
import { saveStorageAuthorizationStatus } from '../utilities/sessionStorage';


const initialState = {
	isAuthorized: JSON.parse(sessionStorage.getItem('isAuthorized')) ?? false,
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


function MovieApp(state = initialState, action) {
	return {
		isAuthorized: setAuthorizationStatus(state.isAuthorized, action),
		currentPage: setCurrentPage(state.currentPage, action),
	}
}

export default MovieApp;