import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CreateHeader } from './Header';
import { CreateFooter } from './Footer';
import { CreateAuthorizationForm } from './Authorization';

const Layout = () => {
	const formAuthorizationStatus = useSelector(state => state.isFormAuthorizationOpen);

	return (
		<>
			{(formAuthorizationStatus) ? <CreateAuthorizationForm /> : ''}
			<div className="main">
				<CreateHeader />
				<Outlet />
			</div>
			<CreateFooter />
		</>
	)
}

export { Layout };