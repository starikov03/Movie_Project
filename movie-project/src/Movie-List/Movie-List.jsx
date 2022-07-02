import { CreateFilmElement } from "./Movie-Element/Movie-Element";
import { CreatePagination } from "./Movie-Pagination/Movie-Pagination";
import { useSelector } from 'react-redux';

const CreateFilmsList = ({ setFormAuthorization }) => {
	const listToShow = useSelector(state => state.LIST_TO_SHOW);
	const allFilmsList = useSelector(state => state.FILMS);
	const favotiteFilmsList = useSelector(state => state.FAVORITE_LIST);
	const toReadFilmsList = useSelector(state => state.TO_READ_LIST);
	let FilmsList = "";
	const currentPage = useSelector(state => state.currentPage);

	switch (listToShow) {
		case "All":
			FilmsList = allFilmsList;
			break;
			case "To-Read":
			FilmsList = toReadFilmsList;
			break;
		case "Favorite":
			FilmsList = favotiteFilmsList;
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
					<CreateFilmElement item={item} index={index} key={index} setFormAuthorization={setFormAuthorization} />)}
			</div>

		</div>
	);
}

export { CreateFilmsList };


