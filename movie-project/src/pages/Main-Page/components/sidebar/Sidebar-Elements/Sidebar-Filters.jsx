import { CHECKBOXES } from "@constants/Constants";
import { CreateSelectPopularityElement } from "./Select-Popularity";
import { CreateSelectYearElement } from "./Select-Year";
import { CreateCheckbox } from "./Checkboxes";
import { useSelector } from "react-redux";
import { CreateSelectFavoriteToRead } from "./Select-Favorite-toRead";
import { useContext } from "react";
import { MyContext } from "../../../Main-Page";


const CreateSidebarFilters = () => {
	const isAuthorized = useSelector(state => state.isAuthorized);
	const { resetFilters } = useContext(MyContext);

	return (
		<div className="sidebar">

			<div className="sidebar_header">
				<h2>Фильтры:</h2>
				<hr />
			</div>

			<button className="clear-filters_btn" onClick={() => resetFilters()}>Сбросить фильтры</button>

			{(isAuthorized) ? <CreateSelectFavoriteToRead /> : ''}

			<CreateSelectPopularityElement />

			<CreateSelectYearElement />

			{CHECKBOXES.map((item, index) => <CreateCheckbox item={item} index={index}
				key={index} />)}

		</div>
	)
}

export {CreateSidebarFilters};