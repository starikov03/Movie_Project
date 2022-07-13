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
	const { set_SORT_TYPE } = useContext(MyContext);
	const dispatch = useDispatch();

	const doSort = (e) => {
		switch (e.target.value) {
			case "Popularity-Descending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortPopularityDescendingList());
				break;
			case "Popularity-Ascending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortPopularityAscendingList());
				break;
			case "Rating-Descending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortRatingDescendingList());
				break;
			case "Rating-Ascending":
				dispatch(setNewCurrentPage(1));
				set_SORT_TYPE(sortRatingAscendingList());
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