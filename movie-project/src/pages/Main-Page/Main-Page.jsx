import { useState, createContext } from "react";
import { CreateFilmsList } from "./components/films-list/Films-List";
import { CreateSidebar } from "./components/sidebar/Sidebar";
import { FILMS_ALL } from "@constants/Constants";
import { ADD_NEW_ACTIVE_GENER, DELETE_ACTIVE_GENER, sortPopularityDescendingList } from "@redux/actions";
export const MyContext = createContext();



const MainPage = () => {
	const [SORT_TYPE, set_SORT_TYPE] = useState(sortPopularityDescendingList());
	const [LIST_TO_SHOW, set_LIST_TO_SHOW] = useState("All");
	const [FILMS, set_FILMS] = useState(FILMS_ALL);
	const [currentYear, setCurrentYear] = useState("2020");
	const [activeGeners, setActiveGeners] = useState([]);


	const setNewCurrentYear = (Year) => { setCurrentYear(Year) };

	const setNewActiveGeners = (action) => {
		let newGenersList = [...activeGeners];
		switch (action.type) {
			case ADD_NEW_ACTIVE_GENER:
				newGenersList.push(action.newActiveGener);
				setActiveGeners(newGenersList);
				break;
			case DELETE_ACTIVE_GENER:
				newGenersList.splice(newGenersList.indexOf(action.activeGener, 0), 1)
				setActiveGeners(newGenersList);
				break;
			default:
				setActiveGeners(newGenersList);
		}
	}


	const resetFilters = () => {
		set_LIST_TO_SHOW("All");
		set_FILMS(FILMS_ALL);
		setCurrentYear("2020");
		setActiveGeners([]);
		document.getElementById('Select-Years').selectedIndex = 0;
		document.getElementById('Select-Popularity').selectedIndex = 0;
		document.querySelectorAll('.checkbox_input').forEach(item => item.checked = false);
	}


	return (
		<div className="site_content">

			<div className="content_header">
			<div className="default-container">
                <div className="next-main-slider-dots">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
			</div>

			<MyContext.Provider value={{ set_SORT_TYPE, setNewCurrentYear, setNewActiveGeners, set_LIST_TO_SHOW, resetFilters }}>

				<CreateSidebar />

				<CreateFilmsList listToShow={LIST_TO_SHOW} allFilmsList={FILMS} 
				currentYear={currentYear} activeGeners={activeGeners} sortType={SORT_TYPE} />

			</MyContext.Provider>

		</div>
	)
}

export { MainPage };