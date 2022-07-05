import { CreateFilmElement } from "./film-element/Film-Element";
import { CreatePagination } from "./films-pagination/Films-Pagination";
import { useSelector } from 'react-redux';
import { sortSelectedList } from "../../../../utilities/sortFilms";

const CreateFilmsList = (props) => {
	const { listToShow, allFilmsList, favotiteFilmsList, toReadFilmsList, currentYear, activeGeners } = props;
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

			<CreatePagination FilmsList={FilmsList} />

			<div className="films_block">
				{FilmsList.slice(10 * (currentPage - 1), 10 * currentPage).map((item, index) =>
					<CreateFilmElement item={item} index={index} key={index} /*setFormAuthorization={setFormAuthorization}*/
						favotiteFilmsList={favotiteFilmsList} toReadFilmsList={toReadFilmsList} />)}
			</div>
		</div>
	);
}

export { CreateFilmsList };


