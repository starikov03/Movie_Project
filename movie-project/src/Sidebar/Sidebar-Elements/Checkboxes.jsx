import { useDispatch } from "react-redux";
import { setNewCurrentPage } from "../../redux/actions";
import { addActiveGener, deleteActiveGener } from "../../redux/actions";
import { useContext } from "react";
import { MyContext } from "../../App";


const CreateCheckbox = ({ index, item }) => {
	const { setNewActiveGeners } = useContext(MyContext);
	const dispatch = useDispatch();

	const onSelected = (e) => {
		if (e.target.checked) {
			setNewActiveGeners(addActiveGener(e.target.value));
			dispatch(setNewCurrentPage(1));
		} else {
			setNewActiveGeners(deleteActiveGener(e.target.value));
			dispatch(setNewCurrentPage(1));
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