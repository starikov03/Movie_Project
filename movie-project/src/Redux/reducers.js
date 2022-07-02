import {
	SORT_POPULARITY_DESCENDING,
	SORT_POPULARITY_ASCENDING,
	SORT_RATING_DESCENDING,
	SORT_RATING_ASCENDING,
	SORT_BY_YEAR,
	SORT_BY_DEFAULT,
	SORT_BY_GENER,
	SET_NEW_CURRENT_PAGE,
	SET_NEW_CURRENT_YEAR,
	ADD_NEW_ACTIVE_GENER,
	DELETE_ACTIVE_GENER,
	LOG_IN,
	LOG_OUT,
	ADD_FAVORITE_LIST,
	REMOVE_FAVORITE_LIST,
	SHOW_ALL_FILMS,
	SHOW_FAVORITE_FILMS,
	SHOW_TO_READ_FILMS,
	ADD_TO_READ_LIST,
	REMOVE_TO_READ_LIST,
} from './actions';
import { DEFAULT_FILMS, FILMS } from '../Consts';
import { saveStorageAuthorizationStatus } from '../utilities/sessionStorage';
import { saveStorageFavoriteFilms, saveStorageToReadFilms } from '../utilities/localStorage';


const initialState = {
	LIST_TO_SHOW: 'All',
	isAuthorized: JSON.parse(sessionStorage.getItem('isAuthorized')) ?? false,
	FILMS: DEFAULT_FILMS,
	FILMS_SORTED: FILMS,
	FAVORITE_LIST: JSON.parse(localStorage.getItem('favoriteFilms')) ?? [],
	TO_READ_LIST: JSON.parse(localStorage.getItem('toReadFilms')) ?? [],
	currentPage: 1,
	currentYear: "2020",
	activeGeners: [],
}


function sortAllFilmsList(state, sortedList, currentYear, activeGeners, action) {
	let newFilmsList = [...state];
	let newList = [];
	switch (action.type) {
		case SORT_POPULARITY_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_POPULARITY_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_BY_DEFAULT:
			return DEFAULT_FILMS;
		case SORT_BY_YEAR:
		case SORT_BY_GENER:
			if (!activeGeners[0]) {
				newList = sortedList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			} else {
				activeGeners.forEach(id => {
					let listWithGener = sortedList.filter(item => item.genre_ids.includes(Number(id)) && !newList.includes(item));
					newList = newList.concat(listWithGener);
				});
				newList = newList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			}
			return newList;
		default:
			return state;
	}
}


function sortFavorireList(state, currentYear, activeGeners, action) {
	let newFilmsList = JSON.parse(localStorage.getItem('favoriteFilms')) ?? [];
	let newList = [];
	switch (action.type) {
		case SORT_POPULARITY_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_POPULARITY_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_BY_YEAR:
		case SORT_BY_GENER:
			if (!activeGeners[0]) {
				newList = newFilmsList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			} else {
				activeGeners.forEach(id => {
					let listWithGener = newFilmsList.filter(item => item.genre_ids.includes(Number(id)) && !newList.includes(item));
					newList = newList.concat(listWithGener);
				});
				newList = newList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			}
			return newList;
		case ADD_FAVORITE_LIST:
			newList = [...state, action.filmObject];
			saveStorageFavoriteFilms(newList);
			return newList;
		case REMOVE_FAVORITE_LIST:
			newList = [...state];
			newList.splice(newList.indexOf(action.filmObject, 0), 1);
			saveStorageFavoriteFilms(newList);
			return newList;
		default:
			return state;
	}
}


function sortToReadList(state, currentYear, activeGeners, action) {
	let newFilmsList = JSON.parse(localStorage.getItem('toReadFilms')) ?? [];
	let newList = [];
	switch (action.type) {
		case SORT_POPULARITY_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_POPULARITY_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_BY_YEAR:
		case SORT_BY_GENER:
			if (!activeGeners[0]) {
				newList = newFilmsList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			} else {
				activeGeners.forEach(id => {
					let listWithGener = newFilmsList.filter(item => item.genre_ids.includes(Number(id)) && !newList.includes(item));
					newList = newList.concat(listWithGener);
				});
				newList = newList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
			}
			return newList;
		case ADD_TO_READ_LIST:
			newList = [...state, action.filmObject];
			saveStorageToReadFilms(newList);
			return newList;
		case REMOVE_TO_READ_LIST:
			newList = [...state];
			newList.splice(newList.indexOf(action.filmObject, 0), 1);
			saveStorageToReadFilms(newList);
			return newList;
		default:
			return state;
	}
}


function sortFilmsList_2(state, action) {
	let newFilmsList = [...state];
	switch (action.type) {
		case SORT_POPULARITY_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_POPULARITY_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.popularity > b.popularity ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_DESCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_RATING_ASCENDING:
			newFilmsList = newFilmsList.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1);
			return newFilmsList;
		case SORT_BY_DEFAULT:
			return FILMS;
		default:
			return state;
	}
}

function setCurrentPage(state, action) {
	switch (action.type) {
		case SET_NEW_CURRENT_PAGE:
			return action.newCurrentPage;
		default:
			return state;
	}
}


function setCurrentYear(state, action) {
	switch (action.type) {
		case SET_NEW_CURRENT_YEAR:
			return action.newCurrentYear;
		case SORT_BY_DEFAULT:
			return "2020";
		default:
			return state;
	}
}


function setActiveGeners(state, action) {
	let newGenersList = [...state];
	switch (action.type) {
		case ADD_NEW_ACTIVE_GENER:
			newGenersList.push(action.newActiveGener);
			return newGenersList;
		case DELETE_ACTIVE_GENER:
			newGenersList.splice(newGenersList.indexOf(action.activeGener, 0), 1)
			return newGenersList;
		case SORT_BY_DEFAULT:
			return [];
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


function setListToShow(state, action) {
	switch (action.type) {
		case SHOW_ALL_FILMS:
			return "All";
		case SHOW_FAVORITE_FILMS:
			return "Favorite";
		case SHOW_TO_READ_FILMS:
			return "To-Read";
		case SORT_BY_DEFAULT:
			return "All";
		default:
			return state;
	}
}


function MovieApp(state = initialState, action) {
	return {
		LIST_TO_SHOW: setListToShow(state.LIST_TO_SHOW, action),
		isAuthorized: setAuthorizationStatus(state.isAuthorized, action),
		FILMS: sortAllFilmsList(state.FILMS, state.FILMS_SORTED, state.currentYear, state.activeGeners, action),
		FILMS_SORTED: sortFilmsList_2(state.FILMS_SORTED, action),
		FAVORITE_LIST: sortFavorireList(state.FAVORITE_LIST, state.currentYear, state.activeGeners, action),
		TO_READ_LIST: sortToReadList(state.TO_READ_LIST, state.currentYear, state.activeGeners, action),
		currentPage: setCurrentPage(state.currentPage, action),
		currentYear: setCurrentYear(state.currentYear, action),
		activeGeners: setActiveGeners(state.activeGeners, action)
	}
}

export default MovieApp;