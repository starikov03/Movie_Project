export function saveStorageFavoriteFilms(arrFilms) {
	let favoriteFilms = JSON.stringify(arrFilms);
	localStorage.setItem('favoriteFilms', favoriteFilms);
}

export function saveStorageToReadFilms(arrFilms) {
	let toReadFilms = JSON.stringify(arrFilms);
	localStorage.setItem('toReadFilms', toReadFilms);
}