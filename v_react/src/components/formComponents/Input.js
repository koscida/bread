import React from "react";
import Dropdown from "./Dropdown";
import NumericalInput from "./NumericalInput";
import TextInput from "./TextInput";
import Radios from "./Radios";
import Range from "./Range";

function Input({ data, isEditing = true }) {
	const { dataType } = data;

	const Display = ({
		data: { id, label, name, value, options, handleChange },
	}) => {
		return (
			<div className="col">
				<div className="d-flex flex-row">
					<label className="me-2">
						<b>{label}</b>:{" "}
					</label>
					{value ?? (
						<div
							style={{
								width: "100px",
								background: "#f482",
							}}
						></div>
					)}
				</div>
			</div>
		);
	};

	return isEditing ? (
		dataType === "dropdown" ? (
			<Dropdown data={data} />
		) : dataType === "radio" ? (
			<Radios data={data} />
		) : dataType === "range" ? (
			<Range data={data} />
		) : dataType === "integer" ? (
			<NumericalInput data={data} />
		) : (
			<TextInput data={data} />
		)
	) : (
		<Display data={data} />
	);
}

export default Input;
