import { CreateHeader } from "./Header";
import { CreateSidebar } from "./Sidebar";
import { CreateFilmsList } from "./Movie-List/Movie-List";
import { CreateFooter } from "./Footer";
import { CHECKBOXES } from "./Consts";
import { useState } from 'react';

function App() {
	//const [films, setfilms] = useState(FILMS);
	const [checkboxes, setCheckboxes] = useState(CHECKBOXES);

	return (
		<>
			<div className="main">
				<CreateHeader />
				<div className="site_content">
					<CreateSidebar checkboxes={checkboxes}/>
					<CreateFilmsList />
				</div>
			</div>

			<CreateFooter />
		</>
	)
}

export default App;
