import {
	SORT_POPULARITY_DESCENDING,
	SORT_POPULARITY_ASCENDING,
	SORT_RATING_DESCENDING,
	SORT_RATING_ASCENDING
} from "@redux/actions";
import { FILMS_ALL } from "@constants/Constants";


export function sortFilmsList(state, action) {
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
		default:
			return state;
	}
}

export function sortSelectedList(listToSort, activeGeners, currentYear) {
	let FilmsList = [];
	if (!activeGeners[0]) {
		FilmsList = listToSort.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
	} else {
		activeGeners.forEach(id => {
			let listWithGener = listToSort.filter(item => item.genre_ids.includes(Number(id)) && !FilmsList.includes(item));
			FilmsList = FilmsList.concat(listWithGener);
		});
		FilmsList = FilmsList.filter(item => String(new Date(item.release_date).getFullYear()) === (currentYear));
	}
	return FilmsList;
}


export function sortSearchPage(activeGeners, rating, popularity) {
	let FilmsList = [];

	if (activeGeners.length) {
		activeGeners.forEach(id => {
			let listWithGener = FILMS_ALL.filter(item => item.genre_ids.includes(Number(id)) && !FilmsList.includes(item));
			FilmsList = FilmsList.concat(listWithGener);
		});
	} else {
		FilmsList = [...FILMS_ALL];
	}

	if (rating === "High") {
		FilmsList = FilmsList.filter(item => item.vote_average >= 5);
	} else {
		FilmsList = FilmsList.filter(item => item.vote_average < 5);
	}

	if (popularity === "Popularity") {
		FilmsList = FilmsList.filter(item => item.popularity >= 5 && item.vote_count >= 200);
	} else {
		FilmsList = FilmsList.filter(item => item.popularity < 5 && item.vote_count < 200);
	}

	return FilmsList;
}
