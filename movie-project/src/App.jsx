import { Routes, Route } from 'react-router-dom';
import { Layout } from './components-layout/Layout';
import { MainPage } from "./pages/Main-Page/Main-Page";
import { Notfoundpage } from "./pages/NotFound-Page";
import { FilmPage } from "./pages/FilmCard-Page";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='film/:filmId' element={<FilmPage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App;
