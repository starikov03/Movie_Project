import { useState, useEffect } from "react";
import { allPagesCounter } from "../../helperFunctions/allPagesCounter";

const CreatePagination = ({ setNewPageFilms }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const countPages = allPagesCounter();

	useEffect(() => {
		const previousButton = document.querySelector('.Previous-page_btn');
		const nextButton = document.querySelector('.Next-page_btn');
		if (currentPage === 1) {
			nextButton.disabled = false;
			previousButton.disabled = true;
		} else if (currentPage === countPages) {
			previousButton.disabled = false;
			nextButton.disabled = true;
		} else {
			previousButton.disabled = false;
			nextButton.disabled = false
		}
	})

	const previousOnClick = () => {
		setCurrentPage(currentPage - 1);
		setNewPageFilms(currentPage - 1);
	}

	const nextOnClick = () => {
		setCurrentPage(currentPage + 1);
		setNewPageFilms(currentPage + 1);
	}


	return (
		<div className="pagination-block">
			<h1>Новые фильмы</h1>
			<div className="pagination-btns">
				<button className="Previous-page_btn" onClick={previousOnClick}>Назад</button>
				<button className="Next-page_btn" onClick={nextOnClick}>Вперед</button>
			</div>
			<hr />
			<small>{currentPage} из {countPages}</small>
		</div>
	);
}

export { CreatePagination };