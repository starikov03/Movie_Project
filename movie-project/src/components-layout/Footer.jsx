const CreateFooter = () => {
	return (
		<div className="footer">
			<div className="footer-social default-container">
				<p>
					<a href="index.html"> Главная</a> |
					<a href="films.html"> Фильмы</a> |
					<a href="#"> Сериалы</a> |
					<a href="rating.html"> Рейтинг фильмов</a> |
					<a href="contact.html"> Контакты</a>
				</p>
				<p>Follow us via social media:</p>
				<a href="#">
					<img src="assets/img/icons/youtube.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/facebook.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/instagramm.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/vk.svg" alt="social" />
				</a>
				<a href="#">
					<img src="assets/img/icons/telegramm.svg" alt="social" />
				</a>
			</div>
		</div>

	);
}

export { CreateFooter };