const CreateHeader = () => {
	return (
		<div className="header">
			<div className="logo">
				<div className="logo_text">
					<h1><a href="index.html">КиноМонстр</a></h1>
					<h2>Кино - наша страсть!</h2>
				</div>
			</div>


			<div className="menubar">
				<ul className="menu">
					<li className="selected"><a href="index.html">Главная</a></li>
					<li><a href="films.html">Фильмы</a></li>
					<li><a href="#">Сериалы</a></li>
					<li><a href="rating.html">Рейтинг фильмов</a></li>
					<li><a href="contact.html">Контакты</a></li>
					<button className="Login_btn">Войти</button>
				</ul>
			</div>

		</div>
	);
}

export { CreateHeader };