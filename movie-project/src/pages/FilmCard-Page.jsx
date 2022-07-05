import { useParams } from 'react-router-dom';
import { FILMS_ALL } from "../Consts"

const FilmPage = () => {
	const { filmId } = useParams();

	const currentFilm = FILMS_ALL.find(item => item.id == filmId);

	return (
		<div className="film-page_container">

			<div className='film-page_content'>



				<h2>{currentFilm.title}</h2>

				<div className="descriptions_film">
					<img src={`https://image.tmdb.org/t/p/w500/${currentFilm.poster_path}`} />
					<div className="info_film_page">
						<div className="label">Статус: <span className="value">Released</span></div>
						<div className="label">Рейтинг <span className="value">{currentFilm.vote_average} / 10</span></div>
						<div className="label">Дата выхода: <span className="value">{currentFilm.release_date}</span></div>
						<div className="label">Продолжительность: <span className="value">117 минут</span></div>
						<div className="label">Язык оригинала: <span className="value">{currentFilm.original_language}</span></div>
						<div className="label">Описание: <span className="value">{currentFilm.overview}</span></div>
					</div>
				</div>

				<div className="action-todo">
				Понравился сайт? Добавь себе его в закладки браузера через <strong>Ctrl+D</strong>.
				</div>

				<div className="content_header-filmPage">
				</div>

				<iframe width="100%" height="500" src="https://www.youtube.com/embed/R5KHoE_8dgo?showinfo=0"
					frameBorder="0" allowFullScreen ></iframe>
					<hr />


				<div className="reviews">
					<h2>Отзывы об Интерстеллар</h2>
					<div className="review_name">
						Сергей
					</div>
					<div className="review_text">
						Отличный фильм, 3 часа пролетели не заметно.
					</div>
				</div>

				<div className="reviews">
					<div className="review_name">
						Дмитрий
					</div>
					<div className="review_text">
						После фильма Начало, я с не терпением ждал еще работ от Кристофера Нолана. Интерстеллар меня впечатлил.
					</div>
				</div>

				
					<form className="review">
						<input type="text" className="review_name-input" placeholder="Ваше имя" />
						<textarea className="review_text-input" placeholder="Оставьте ваш отзыв"/>
						<button className="btn" type="submit">Отправить</button>
					</form>
				

			</div>

		</div>
	)
}

export { FilmPage }