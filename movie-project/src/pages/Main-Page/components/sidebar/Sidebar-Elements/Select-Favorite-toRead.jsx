import { useDispatch } from "react-redux";
import { setNewCurrentPage } from "@redux/actions";
import { useContext } from "react";
import { MyContext } from "../../../Main-Page";

const SHOW_LIST = {
	ALL_LIST: "All",
	TO_READ_LIST: "To-Read",
	FAVORITE_LIST: "Favorite",
}

const CreateSelectFavoriteToRead = () => {
	const { setNewListToShow } = useContext(MyContext);
	const dispatch = useDispatch();

	const doSort = (e) => {
		switch (e.target.value) {
			case SHOW_LIST.ALL_LIST:
				dispatch(setNewCurrentPage(1));
				setNewListToShow(e.target.value);
				break;
			case SHOW_LIST.TO_READ_LIST:
				dispatch(setNewCurrentPage(1));
				setNewListToShow(e.target.value);
				break;
			case SHOW_LIST.FAVORITE_LIST:
				dispatch(setNewCurrentPage(1));
				setNewListToShow(e.target.value);
				break;
			default: alert("Это не выполняется")
		}
	}

	return (
		<>
			<div className="select-header"><small>Сохраненные:</small></div>

			<select id="Select-FavoriteToRead" className="select-item" onChange={doSort}>
				<option value={SHOW_LIST.ALL_LIST}>Все</option>
				<option value={SHOW_LIST.TO_READ_LIST}>Смотреть позже</option>
				<option value={SHOW_LIST.FAVORITE_LIST}>Избранные</option>
			</select>
		</>
	)
}

export { CreateSelectFavoriteToRead };