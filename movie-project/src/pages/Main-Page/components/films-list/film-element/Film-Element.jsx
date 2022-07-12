import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { removeToReadList, removeFavoriteList, addFavoriteList, addToReadList, formAuthorizationOpen } from '@redux/actions';


const CreateFilmElementInner = ({ index, item }) => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);
	const favotiteFilmsList = useSelector(state => state.FAVORITE_LIST);
	const toReadFilmsList = useSelector(state => state.TO_READ_LIST);
	const isSavedFavorite = JSON.stringify(favotiteFilmsList).includes(JSON.stringify(item));
	const isSavedToRead = JSON.stringify(toReadFilmsList).includes(JSON.stringify(item));


	const handleClickToRead = () => {
		if (isSavedToRead) {
			dispatch(removeToReadList(item))
		} else {
			dispatch(addToReadList(item))
		}
	}

	const handleClickFavorite = () => {
		if (isSavedFavorite) {
			dispatch(removeFavoriteList(item))
		} else {
			dispatch(addFavoriteList(item))
		}
	}

	return (
		<div key={index} className="card">
			<div className="card-header">
				<img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="rover" />
			</div>
			<div className="card-body">
				<div className="card-title">
					<h4>
						{item.title}
					</h4>
				</div>
				<span>
					{`${item.overview.substring(0, 150)}...`}
				</span>
				<div className="user">
					<button className={(isSavedToRead) ? 'to-read__btn to-read__btn--active' : 'to-read__btn'}
						onClick={() => { (isAuthorized) ? handleClickToRead() : dispatch(formAuthorizationOpen()) }}>
					</button>
					<button className={(isSavedFavorite) ? 'favorite__btn favorite__btn--active' : 'favorite__btn'}
						onClick={() => { (isAuthorized) ? handleClickFavorite() : dispatch(formAuthorizationOpen()) }}>
					</button>
					<div className="film-info">
						<h5>Рейтинг: {item.vote_average}</h5>
						<small>{item.release_date}</small>
					</div>
				</div>
			</div>
			<Link to={`/film/${item.id}`}>
				<button className="film-info_btn">Подробнее</button>
			</Link>
		</div>
	);
}

export const CreateFilmElement = memo(CreateFilmElementInner);