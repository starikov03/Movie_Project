const CreateSidebar = ({ checkboxes }) => {
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

				<button className="clear-filters_btn">Сбросить фильтры</button>

				<div className="select-header"><small>Сортировать по:</small></div>

				<select className="select-item">
					<option value=""></option>
					<option value="2019">Популятные по возрастанию</option>
					<option value="2020">Популярные по убыванию</option>
					<option value="2021">Сначала старые</option>
					<option value="2022">Сначала новые</option>
				</select>

				<div className="select-header"><small>Год релиза:</small></div>

				<select className="select-item">
					<option value=""></option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>

				{checkboxes.map((item, index) => <CreateCheckbox item={item} index={index} key={index} />)}
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


const CreateCheckbox = ({ index, item }) => {
	return (
		<div key={index} className="Checkbox">
			<label className="label">
				<input type="checkbox" />
				<span>
					<i></i>
				</span>
			</label>
			<span className="checkbox_name">{item.name}</span>
		</div>
	)
}

export { CreateSidebar };