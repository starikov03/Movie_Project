
import { useDispatch } from "react-redux";
import {
	sortPopularityDescendingList, sortPopularityAscendingList,
	sortRatingDescendingList, sortRatingAscendingList, setNewCurrentPage
} from "../../Redux/actions";

const CreateSelectPopularityElement = () => {
	const dispatch = useDispatch();

	const doSort = (e) => {
		switch (e.target.value) {
			case "Popularity-Descending":
				dispatch(setNewCurrentPage(1));
				dispatch(sortPopularityDescendingList());
				break;
			case "Popularity-Ascending":
				dispatch(setNewCurrentPage(1));
				dispatch(sortPopularityAscendingList());
				break;
			case "Rating-Descending":
				dispatch(setNewCurrentPage(1));
				dispatch(sortRatingDescendingList());
				break;
			case "Rating-Ascending":
				dispatch(setNewCurrentPage(1));
				dispatch(sortRatingAscendingList());
				break;
			default: alert("Это не выполняется")
		}
	}


	return (
		<>
			<div className="select-header"><small>Сортировать по:</small></div>

			<select id="Select-Popularity" className="select-item" onChange={doSort}>
				<option value="Popularity-Descending">Популярные по убыванию</option>
				<option value="Popularity-Ascending">Популярные по возрастанию</option>
				<option value="Rating-Descending">Рейтинг по убыванию</option>
				<option value="Rating-Ascending">Рейтинг по возрастанию</option>
			</select>
		</>
	);
}

export { CreateSelectPopularityElement };