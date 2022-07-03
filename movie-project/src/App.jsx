import { CreateHeader } from "./Header";
import { CreateSidebar } from "./sidebar/Sidebar";
import { CreateFilmsList } from "./movie-list/Movie-List.jsx";
import { CreateFooter } from "./Footer";
import { useState, createContext } from "react";
import { CreateAuthorizationForm } from "./Authorization";
import { FILMS_ALL } from "./Consts";
import { sortFilmsList } from "./utilities/sortFilms";
import {
	ADD_NEW_ACTIVE_GENER,
	DELETE_ACTIVE_GENER,
	ADD_FAVORITE_LIST,
	REMOVE_FAVORITE_LIST,
	ADD_TO_READ_LIST,
	REMOVE_TO_READ_LIST
} from "./redux/actions";
import { saveStorageFavoriteFilms, saveStorageToReadFilms } from "./utilities/localStorage";
export const MyContext = createContext();


function App() {
	const [formAuthorization, setFormAuthorization] = useState({ isFormOpen: false })
	const [LIST_TO_SHOW, set_LIST_TO_SHOW] = useState("All");
	const [FILMS, set_FILMS] = useState(FILMS_ALL);
	const [FAVORITE_LIST, set_FAVORITE_LIST] = useState(JSON.parse(localStorage.getItem('favoriteFilms')) ?? []);
	const [TO_READ_LIST, set_TO_READ_LIST] = useState(JSON.parse(localStorage.getItem('toReadFilms')) ?? []);
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


	const setNewFavoriteToReadList = (action) => {
		let newList = [];
		switch (action.type) {
			case ADD_FAVORITE_LIST:
				newList = [...FAVORITE_LIST, action.filmObject];
				saveStorageFavoriteFilms(newList);
				set_FAVORITE_LIST(newList);
				break;
			case REMOVE_FAVORITE_LIST:
				newList = [...FAVORITE_LIST];
				newList.splice(newList.indexOf(action.filmObject, 0), 1);
				saveStorageFavoriteFilms(newList);
				set_FAVORITE_LIST(newList);
				break;
			case ADD_TO_READ_LIST:
				newList = [...TO_READ_LIST, action.filmObject];
				saveStorageToReadFilms(newList);
				set_TO_READ_LIST(newList);
				break;
			case REMOVE_TO_READ_LIST:
				newList = [...TO_READ_LIST];
				newList.splice(newList.indexOf(action.filmObject, 0), 1);
				saveStorageToReadFilms(newList);
				set_TO_READ_LIST(newList);
				break;
			default:
				set_TO_READ_LIST([]);
		}
	}

	const sortAll = (action) => {
		set_FILMS(sortFilmsList(FILMS, action));
		set_FAVORITE_LIST(sortFilmsList(FAVORITE_LIST, action));
		set_TO_READ_LIST(sortFilmsList(TO_READ_LIST, action));
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
		<>
			{(formAuthorization.isFormOpen) ? <CreateAuthorizationForm setFormAuthorization={setFormAuthorization} /> : ''}
			<div className="main">
				<CreateHeader setFormAuthorization={setFormAuthorization} />
				<div className="site_content">

					<MyContext.Provider value={{ sortAll, setNewCurrentYear, setNewActiveGeners, set_LIST_TO_SHOW, setNewFavoriteToReadList }}>
						
						<CreateSidebar resetFilters={resetFilters} />

						<CreateFilmsList setFormAuthorization={setFormAuthorization} listToShow={LIST_TO_SHOW}
							allFilmsList={FILMS} favotiteFilmsList={FAVORITE_LIST} toReadFilmsList={TO_READ_LIST}
							currentYear={currentYear} activeGeners={activeGeners} />
					
					</MyContext.Provider>

				</div>
			</div>
			<CreateFooter />
		</>
	)
}

export default App;
