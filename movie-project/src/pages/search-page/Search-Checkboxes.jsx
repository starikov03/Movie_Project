import { memo } from "react";
import { addActiveGener, deleteActiveGener } from "@redux/actions";

const CreateCheckboxInner = ({ index, item, setNewActiveGeners }) => {
	return (
		<div key={index} className="checkbox">
			<label className="custom-checkbox">
				<input type="checkbox" className="checkbox_input" name="color-1" value={item.id}
					onChange={(e) => {
						(e.target.checked) ?
							setNewActiveGeners(addActiveGener(e.target.value))
							:
							setNewActiveGeners(deleteActiveGener(e.target.value))
					}} />
				<span>{item.name}</span>
			</label>
		</div>
	)
}

export const CreateCheckbox = memo(CreateCheckboxInner);