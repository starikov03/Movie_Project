import { useSelector, useDispatch } from 'react-redux';
import { logOut, formAuthorizationOpen } from "@redux/actions";
import { NavLink } from 'react-router-dom';



const CreateHeader = () => {
	const dispatch = useDispatch();
	const isAuthorized = useSelector(state => state.isAuthorized);


	return (
		<header>
			<div className="header">
				<div className="menubar">
					<ul className="menu">
						<NavLink className="menu-item" to="/">Home</NavLink>
						<NavLink className="menu-item" to="/search">Search</NavLink>
						<li className="inProgress" to="/">Series</li>
						<li className="inProgress" to="/">Films rating</li>
						<li className="inProgress" to="/">Contacts</li>
						{(isAuthorized) ?
							<button className="Logout_btn" onClick={() => { dispatch(logOut()) }}>Sign Out</button>
							:
							<button className="Login_btn" onClick={() => { dispatch(formAuthorizationOpen()) }}>Sign In</button>}
					</ul>
				</div>

			</div>
		</header>
	);
}

export { CreateHeader };

