import { CHECKBOXES } from "@constants/Constants";
import { useState, useCallback } from "react";
import { ADD_NEW_ACTIVE_GENER, DELETE_ACTIVE_GENER } from "@redux/actions";
import { CreateCheckbox } from "./Search-Checkboxes";
import { sortSearchPage } from "@utilities/sortFilms";
import { CreateFilmElement } from "../main-page/components/films-list/film-element/Film-Element";
import { Link } from "react-router-dom";


const SearchPage = () => {
	const [activeGeners, setActiveGeners] = useState([]);
	const [rating, setRating] = useState('High');
	const [popularity, setPopularity] = useState('Popularity');
	const [SORTED_FILMS, set_SORTED_FILMS] = useState([]);
	const [currentFilmNumber, setCurrentFilmNumber] = useState(0);
	const currentFilm = SORTED_FILMS[currentFilmNumber];


	const setNewActiveGeners = useCallback((action) => {
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
	}, [activeGeners])


	return (
		<div className="site_content">

			<div className="sidebar_container">

				<div className="sidebar">
					<div className="sidebar_header">
						<h2>Filters:</h2>
						<hr />
					</div>

					<div className="select-header"><small>Film rating:</small></div>
					<select id="Select-Popularity" className="select-item" onChange={(e) => { setRating(e.target.value) }}>
						<option value="High">High</option>
						<option value="Low">Low</option>
					</select>


					<div className="select-header"><small>Film popularity:</small></div>
					<select id="Select-Popularity" className="select-item" onChange={(e) => { setPopularity(e.target.value) }}>
						<option value="Popularity">Popular</option>
						<option value="Not-popularity">Not popular</option>
					</select>


					{CHECKBOXES.map((item, index) => <CreateCheckbox item={item} index={index} setNewActiveGeners={setNewActiveGeners}
						key={index} />)}


					<button className="sort-btn"
						onClick={() => set_SORTED_FILMS(sortSearchPage(activeGeners, rating, popularity))}>Find</button>


					<div className="search-btns">
						{(currentFilm && !(SORTED_FILMS.length === currentFilmNumber + 1)) ?
							<button className="Previous-search_btn" onClick={() => { setCurrentFilmNumber(currentFilmNumber + 1) }}>Next</button>
							:
							<button className="Previous-search_btn" disabled>Next</button>}
						{(currentFilm) ?
							<Link to={`/film/${currentFilm.id}`}>
								<button className="Next-search_btn" >Read more</button>
							</Link>
							:
							<button className="Next-search_btn" disabled>Read more</button>}
					</div>
				</div>
			</div>


			<div className="content-search">
				<div className="films_block-serch">
					{(currentFilm) ? <CreateFilmElement item={currentFilm} index={currentFilmNumber} key={currentFilmNumber} /> : ''}
				</div>
			</div>
		</div>
	)
}

export { SearchPage };