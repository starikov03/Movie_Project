import { CreateSidebarFilters } from "./sidebar-elements/Sidebar-Filters";


const CreateSidebar = () => {

	return (
		<div className="sidebar_container">

			<CreateSidebarFilters />

			<div className="sidebar">
				<h2>Новости</h2>
				<hr />
				<span>31.02.2018</span>
				<p>Мы запустили расширенный поиск</p>
				<a href="show.html">читать</a>
			</div>


			<div className="sidebar">
				<h2>Рейтинг фильмов</h2>
				<hr />
				<ul>
					<li><a href="show.html">Интерстеллар</a><span className="rating_sidebar">8.1</span></li>
					<li><a href="show.html">Матрица</a><span className="rating_sidebar">8.0</span></li>
					<li><a href="show.html">Безумный макс</a><span className="rating_sidebar">7.5</span></li>
					<li><a href="show.html">Облачный атлас</a><span className="rating_sidebar">7.4</span></li>
				</ul>
			</div>

		</div>
	);
}


export { CreateSidebar };