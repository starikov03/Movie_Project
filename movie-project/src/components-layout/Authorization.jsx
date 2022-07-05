import { useState } from "react";
import { useDispatch } from 'react-redux';
import { logIn } from "../redux/actions";
import { LOG_IN_DATA } from "../Consts";
import { formAuthorizationClose } from "../redux/actions";

const CreateAuthorizationForm = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const loginVerification = (e) => {
		if (LOG_IN_DATA.username === username && LOG_IN_DATA.password === password) {
			dispatch(logIn());
			dispatch(formAuthorizationClose());
			e.preventDefault();
		} else {
			alert("Не правельный логин или пароль");
			e.preventDefault();
		}
	}


	return (
		<div className="modal" id="modal-name">
			<div className="modal-sandbox"></div>
			<div className="modal-box">
				<div className="modal-body">
					<div className="close-modal-1" onClick={() => { dispatch(formAuthorizationClose()); }}>&#10006;</div>
					<form className="form" onSubmit={loginVerification}>
						<h3>Войти в аккаунт</h3>

						<label >Логин</label>
						<input type="text" placeholder="логин" id="username" onChange={(e) => { setUsername(e.target.value) }} />

						<label >Пароль</label>
						<input type="password" placeholder="пароль" id="password" onChange={(e) => { setPassword(e.target.value) }} />

						<button type="submit">Войти</button>
						<div className="social">
							<div className="go"><i className="fab fa-google"></i>  Google</div>
							<div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export { CreateAuthorizationForm };