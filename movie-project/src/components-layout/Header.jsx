import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../redux/actions";
import { Link } from 'react-router-dom';
import { formAuthorizationOpen } from '../redux/actions';


const CreateHeader = () => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);


	return (
		<>
			

			<header>
			<div className="header">
				<div className="menubar">
					<ul className="menu">
						<li className="selected"><Link to="/">Главная</Link></li>
						<li><a href="films.html">Фильмы</a></li>
						<li><a href="#">Сериалы</a></li>
						<li><a href="rating.html">Рейтинг фильмов</a></li>
						<li><a href="contact.html">Контакты</a></li>
						{(isAuthorized) ?
							<button className="Logout_btn" onClick={() => { dispatch(logOut()) }}>Log out</button>
							:
							<button className="Login_btn" onClick={() => { dispatch(formAuthorizationOpen()) }}>Log in</button>}
					</ul>
				</div>

			</div>
			</header>
		</>
	);
}

export { CreateHeader };

