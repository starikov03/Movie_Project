import { useDispatch } from "react-redux";
import { sortByGener, addActiveGener, deleteActiveGener, setNewCurrentPage } from "../../Redux/actions";


const CreateCheckbox = ({ index, item }) => {

	const dispatch = useDispatch();

	const onSelected = (e) => {
		if (e.target.checked) {
			dispatch(setNewCurrentPage(1));
			dispatch(addActiveGener(e.target.value));
			dispatch(sortByGener());
		} else {
			dispatch(setNewCurrentPage(1));
			dispatch(deleteActiveGener(e.target.value));
			dispatch(sortByGener());
		}
	}

	return (

		<div key={index} className="checkbox">
			<label className="custom-checkbox">
				<input type="checkbox" className="checkbox_input" name="color-1" value={item.id} onChange={onSelected} />
				<span>{item.name}</span>
			</label>
		</div>


	)
}

export { CreateCheckbox };