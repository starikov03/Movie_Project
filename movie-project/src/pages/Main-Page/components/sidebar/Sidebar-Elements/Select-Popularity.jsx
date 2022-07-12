import { useDispatch } from "react-redux";
import {
	sortPopularityDescendingList,
	sortPopularityAscendingList,
	sortRatingDescendingList,
	sortRatingAscendingList,
	setNewCurrentPage,
} from "@redux/actions";
import { useContext } from "react";
import { MyContext } from "../../../Main-Page";

const CreateSelectPopularityElement = () => {
	const { sortAll } = useContext(MyContext);
	const dispatch = useDispatch();

	const doSort = (e) => {
		switch (e.target.value) {
			case "Popularity-Descending":
				dispatch(setNewCurrentPage(1));
				sortAll(sortPopularityDescendingList());
				break;
			case "Popularity-Ascending":
				dispatch(setNewCurrentPage(1));
				sortAll(sortPopularityAscendingList());
				break;
			case "Rating-Descending":
				dispatch(setNewCurrentPage(1));
				sortAll(sortRatingDescendingList());
				break;
			case "Rating-Ascending":
				dispatch(setNewCurrentPage(1));
				sortAll(sortRatingAscendingList());
				break;
			default: alert("This does not work")
		}
	}


	return (
		<>
			<div className="select-header"><small>Sort by:</small></div>

			<select id="Select-Popularity" className="select-item" onChange={doSort}>
				<option value="Popularity-Descending">Popular descending</option>
				<option value="Popularity-Ascending">Popular ascending</option>
				<option value="Rating-Descending">Rating descending</option>
				<option value="Rating-Ascending">Rating ascending</option>
			</select>
		</>
	);
}

export { CreateSelectPopularityElement };