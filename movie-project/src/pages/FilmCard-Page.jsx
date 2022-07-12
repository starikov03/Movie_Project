import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FILMS_ALL } from "@constants/Constants";
import { removeToReadList, removeFavoriteList, addFavoriteList, addToReadList, formAuthorizationOpen } from '@redux/actions';

const FilmPage = () => {
	const { filmId } = useParams();
	const currentFilm = FILMS_ALL.find(item => item.id == filmId);
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);
	const favotiteFilmsList = useSelector(state => state.FAVORITE_LIST);
	const toReadFilmsList = useSelector(state => state.TO_READ_LIST);
	const isSavedFavorite = JSON.stringify(favotiteFilmsList).includes(JSON.stringify(currentFilm));
	const isSavedToRead = JSON.stringify(toReadFilmsList).includes(JSON.stringify(currentFilm));


	const handleClickToRead = () => {
		if (isSavedToRead) {
			dispatch(removeToReadList(currentFilm))
		} else {
			dispatch(addToReadList(currentFilm))
		}
	}

	const handleClickFavorite = () => {
		if (isSavedFavorite) {
			dispatch(removeFavoriteList(currentFilm))
		} else {
			dispatch(addFavoriteList(currentFilm))
		}
	}


	return (
		<div className="film-page_container">

			<div className='film-page_content'>

			<div className="user-filmPage">
					<button className={(isSavedToRead) ? 'to-read__btn to-read__btn--active' : 'to-read__btn'}
						onClick={() => { (isAuthorized) ? handleClickToRead() : dispatch(formAuthorizationOpen()) }}>
					</button>
					<button className={(isSavedFavorite) ? 'favorite__btn favorite__btn--active' : 'favorite__btn'}
						onClick={() => { (isAuthorized) ? handleClickFavorite() : dispatch(formAuthorizationOpen()) }}>
					</button>
				</div>

				<h2>{currentFilm.title}</h2>

				<div className="descriptions_film">
					<img src={`https://image.tmdb.org/t/p/w500/${currentFilm.poster_path}`} />
					<div className="info_film_page">
						<div className="label">Статус: <span className="value">Released</span></div>
						<div className="label">Рейтинг <span className="value">{currentFilm.vote_average} / 10</span></div>
						<div className="label">Дата выхода: <span className="value">{currentFilm.release_date}</span></div>
						<div className="label">Продолжительность: <span className="value">117 минут</span></div>
						<div className="label">Язык оригинала: <span className="value">{currentFilm.original_language}</span></div>
						<div className="label">Описание: <span className="value">{currentFilm.overview}</span></div>
					</div>
				</div>

				<div className="action-todo">
					Понравился сайт? Добавь себе его в закладки браузера через <strong>Ctrl+D</strong>.
				</div>

				<iframe width="100%" height="500" src="https://www.youtube.com/embed/R5KHoE_8dgo?showinfo=0"
					frameBorder="0" allowFullScreen ></iframe>

			</div>

		</div>
	)
}

export { FilmPage }