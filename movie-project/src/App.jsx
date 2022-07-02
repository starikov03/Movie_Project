import { CreateHeader } from "./Header";
import { CreateSidebar } from "./Sidebar/Sidebar";
import { CreateFilmsList } from "./Movie-List/Movie-List";
import { CreateFooter } from "./Footer";
import { useState } from "react";
import { CreateAuthorizationForm } from "./Authorization";


function App() {
	const [formAuthorization, setFormAuthorization] = useState({ isFormOpen: false })


	return (
		<>
			{(formAuthorization.isFormOpen) ? <CreateAuthorizationForm setFormAuthorization={setFormAuthorization} /> : ''}
			<div className="main">
				<CreateHeader setFormAuthorization={setFormAuthorization} />
				<div className="site_content">
					
					<CreateSidebar />
					<CreateFilmsList setFormAuthorization={setFormAuthorization} />

				</div>
			</div>

			<CreateFooter />
		</>
	)
}

export default App;
