import { useDispatch } from "react-redux";
import { showAllFilms, showFavoriteFilms, setNewCurrentPage, showToReadFilms } from "../../Redux/actions";

const CreateSelectFavoriteToRead = () => {
	const dispatch = useDispatch();

	const doSort = (e) => {
		switch (e.target.value) {
			case "All":
				dispatch(setNewCurrentPage(1));
				dispatch(showAllFilms());
				break;
			case "To-Read":
				dispatch(setNewCurrentPage(1));
				dispatch(showToReadFilms());
				break;
			case "Favorite":
				dispatch(setNewCurrentPage(1));
				dispatch(showFavoriteFilms());
				break;
			default: alert("Это не выполняется")
		}
	}

	return (
		<>
			<div className="select-header"><small>Сохраненные:</small></div>

			<select id="Select-FavoriteToRead" className="select-item" onChange={doSort}>
				<option value="All">Все</option>
				<option value="To-Read">Смотреть позже</option>
				<option value="Favorite">Избранные</option>
			</select>
		</>
	)
}

export { CreateSelectFavoriteToRead };