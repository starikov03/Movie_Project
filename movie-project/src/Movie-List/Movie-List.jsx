import { CreateFilmElement } from "./movie-element/Movie-Element";
import { CreatePagination } from "./movie-pagination/Movie-Pagination";
import { useSelector } from 'react-redux';
import { sortSelectedList } from "../utilities/sortFilms";

const CreateFilmsList = (props) => {
	const { setFormAuthorization, listToShow, allFilmsList, favotiteFilmsList, toReadFilmsList, currentYear, activeGeners } = props;
	const currentPage = useSelector(state => state.currentPage);
	let FilmsList = [];


	switch (listToShow) {
		case "All":
			FilmsList = sortSelectedList(allFilmsList, activeGeners, currentYear);
			break;
		case "To-Read":
			FilmsList = sortSelectedList(toReadFilmsList, activeGeners, currentYear);
			break;
		case "Favorite":
			FilmsList = sortSelectedList(favotiteFilmsList, activeGeners, currentYear);
			break;
		default: alert("Error");
	}


	return (
		<div className="content">
			<div className="content_header">
			</div>

			<CreatePagination FilmsList={FilmsList} />

			<div className="films_block">
				{FilmsList.slice(10 * (currentPage - 1), 10 * currentPage).map((item, index) =>
					<CreateFilmElement item={item} index={index} key={index} setFormAuthorization={setFormAuthorization}
						favotiteFilmsList={favotiteFilmsList} toReadFilmsList={toReadFilmsList} />)}
			</div>
		</div>
	);
}

export { CreateFilmsList };


