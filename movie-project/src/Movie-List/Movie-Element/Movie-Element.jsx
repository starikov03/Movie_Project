const CreateFilmElement = ({ index, item }) => {
	const imagePath = item.backdrop_path;

	return (
		<div key={index} className="card">
			<div className="card-header">
				<img src={`https://image.tmdb.org/t/p/w500/${imagePath}`} alt="rover" />
			</div>
			<div className="card-body">
				<h4>
					{item.title}
				</h4>
				<p>
				</p>
				<p className="rating">
					Количество голосов: {item.vote_count}
				</p>
				<span className="tag tag-teal">info</span>
				<div className="user">
					<button className="to-read__btn to-read__btn--active "></button>
					<button className="favorite__btn "></button>
					<div className="film-info">
						<h5>Рейтинг: {item.vote_average}</h5>
						<small>{item.release_date}</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export { CreateFilmElement };