import { useSelector, useDispatch } from 'react-redux';
import { setNewCurrentPage } from '../../redux/actions';
import { removeToReadList, removeFavoriteList, addFavoriteList, addToReadList } from '../../redux/actions';
import { useContext } from "react";
import { MyContext } from "../../App";

const CreateFilmElement = ({ index, item, setFormAuthorization, favotiteFilmsList, toReadFilmsList }) => {
	const { setNewFavoriteToReadList } = useContext(MyContext);
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);


	const handleClickToRead = () => {
		if (toReadFilmsList.includes(item, 0)) {
			setNewFavoriteToReadList(removeToReadList(item))
			dispatch(setNewCurrentPage(1));
		} else {
			setNewFavoriteToReadList(addToReadList(item))
		}
	}

	const handleClickFavorite = () => {
		if (favotiteFilmsList.includes(item, 0)) {
			setNewFavoriteToReadList(removeFavoriteList(item))
			dispatch(setNewCurrentPage(1));
		} else {
			setNewFavoriteToReadList(addFavoriteList(item))
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
					<button className={(JSON.stringify(toReadFilmsList).includes(JSON.stringify(item), 0)) ?
						'to-read__btn to-read__btn--active' : 'to-read__btn'}
						onClick={() => { (isAuthorized) ? handleClickToRead() : setFormAuthorization({ isFormOpen: true }) }}>
					</button>
					<button className={(JSON.stringify(favotiteFilmsList).includes(JSON.stringify(item), 0)) ?
						'favorite__btn favorite__btn--active' : 'favorite__btn'}
						onClick={() => { (isAuthorized) ? handleClickFavorite() : setFormAuthorization({ isFormOpen: true }) }}>
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