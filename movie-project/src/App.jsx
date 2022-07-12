import { Routes, Route } from 'react-router-dom';
import { Layout } from '@components-layout/Layout';
import { MainPage } from "@pages/main-page/Main-Page";
import { Notfoundpage } from "@pages/NotFound-Page";
import { FilmPage } from "@pages/FilmCard-Page";
import { SearchPage } from "@pages/search-page/Search-Page";
import ScrollToTop from "@components-layout/ScrollToTop";

function App() {
	return (
		<ScrollToTop>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='film/:filmId' element={<FilmPage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='*' element={<Notfoundpage />} />
				</Route>
			</Routes>
		</ScrollToTop>
	)
}

export default App;
