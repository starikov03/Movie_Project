import { CHECKBOXES } from "../Consts";
import { CreateSelectPopularityElement } from "./Sidebar-Elements/Select-Popularity";
import { CreateSelectYearElement } from "./Sidebar-Elements/Select-Year";
import { CreateCheckbox } from "./Sidebar-Elements/Checkboxes";
import { useSelector } from "react-redux";
import { CreateSelectFavoriteToRead } from "./Sidebar-Elements/Select-Favorite-toRead";


const CreateSidebar = ({ resetFilters }) => {
	const isAuthorized = useSelector(state => state.isAuthorized);

	return (
		<div className="sidebar_container">

			<div className="sidebar">
				<h2>Поиск</h2>
				<hr />
				<form method="post" action="#" id="search_form">
					<input type="search" name="search_field" placeholder="ваш запрос" />
					<input type="submit" className="btn" value="найти" />
				</form>
			</div>


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


			<div className="sidebar">
				<h2>Новости</h2>
				<hr />
				<span>31.02.2018</span>
				<p>Мы запустили расширенный поиск</p>
				<a href="#">читать</a>
			</div>


			<div className="sidebar">
				<h2>Рейтинг фильмов</h2>
				<hr />
				<ul>
					<li><a href="show.html">Интерстеллар</a><span className="rating_sidebar">8.1</span></li>
					<li><a href="#">Матрица</a><span className="rating_sidebar">8.0</span></li>
					<li><a href="#">Безумный макс</a><span className="rating_sidebar">7.5</span></li>
					<li><a href="#">Облачный атлас</a><span className="rating_sidebar">7.4</span></li>
				</ul>
			</div>

		</div>
	);
}


export { CreateSidebar };