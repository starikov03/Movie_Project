import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteList, removeFavoriteList, setNewCurrentPage, removeToReadList, addToReadList } from '../../Redux/actions';

const CreateFilmElement = ({ index, item, setFormAuthorization }) => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);
	const favoriteList = useSelector(state => state.FAVORITE_LIST);
	const toReadList = useSelector(state => state.TO_READ_LIST);

	const changeToReadList = () => {
		if (toReadList.includes(item, 0)) {
			dispatch(removeToReadList(item));
			dispatch(setNewCurrentPage(1));
		} else {
			dispatch(addToReadList(item));
		}
	}


	const changeFavoriteList = () => {
		if (favoriteList.includes(item, 0)) {
			dispatch(removeFavoriteList(item));
			dispatch(setNewCurrentPage(1));
		} else {
			dispatch(addFavoriteList(item));
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
					<button className={(JSON.stringify(toReadList).includes(JSON.stringify(item), 0)) ?
						'to-read__btn to-read__btn--active' : 'to-read__btn'}
						onClick={() => { (isAuthorized) ? changeToReadList() : setFormAuthorization({ isFormOpen: true }) }}>
					</button>
					<button className={(JSON.stringify(favoriteList).includes(JSON.stringify(item), 0)) ?
						'favorite__btn favorite__btn--active' : 'favorite__btn'}
						onClick={() => { (isAuthorized) ? changeFavoriteList() : setFormAuthorization({ isFormOpen: true }) }}>
					</button>
					<div className="film-info">
						<h5>Рейтинг: {item.vote_average}</h5>
						<small>{item.release_date}</small>
					</div>
				</div>
			</div>
			<button className="film-info_btn">Подробнее</button>
		</div>
	);
}

export { CreateFilmElement };