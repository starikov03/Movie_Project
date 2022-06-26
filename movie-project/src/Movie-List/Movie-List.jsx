import { CreateFilmElement } from "./Movie-Element/Movie-Element";
import { CreatePagination } from "./Movie-Pagination/Movie-Pagination";
import { FILMS } from "../Consts";
import { useState } from "react";

const CreateFilmsList = () => {
	const [filmsOnPage, setFilmsOnPage] = useState(FILMS.slice(0, 10));

	const setNewPageFilms = (nowNumberOfPage) => {
		const newArray = FILMS.slice(10 * (nowNumberOfPage - 1), 10 * nowNumberOfPage);
		setFilmsOnPage(newArray);
	}

	return (
		<div className="content">
			
			<CreatePagination setNewPageFilms={setNewPageFilms} />
			


			<div className="films_block">
				{filmsOnPage.map((item, index) => <CreateFilmElement item={item} index={index} key={index} />)}
			</div>

			

		</div>
	);
}

export { CreateFilmsList };


