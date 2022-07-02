import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "./Redux/actions";


const CreateHeader = ({ setFormAuthorization }) => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);


	return (
		<>
			<div className="header">

				<div className="menubar">
					<ul className="menu">
						<li className="selected"><a href="index.html">Главная</a></li>
						<li><a href="films.html">Фильмы</a></li>
						<li><a href="#">Сериалы</a></li>
						<li><a href="rating.html">Рейтинг фильмов</a></li>
						<li><a href="contact.html">Контакты</a></li>
						{(isAuthorized) ?
							<button className="Logout_btn" onClick={() => { dispatch(logOut()) }}>Log out</button>
							:
							<button className="Login_btn" onClick={() => { setFormAuthorization({ isFormOpen: true }) }}>Log in</button>}
					</ul>
				</div>

			</div>
		</>
	);
}

export { CreateHeader };

