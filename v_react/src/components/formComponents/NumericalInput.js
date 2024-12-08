import React from "react";

function NumericalInput({
	data: { id, label, name, value, handleChange },
	addon = null,
}) {
	return (
		<div className="input-group">
			<label className="form-label p-1 me-2" htmlFor={id}>
				<b>{label}</b>
			</label>

			{addon ? (
				<span className="input-group-text" id="basic-addon1">
					{addon}
				</span>
			) : (
				<></>
			)}
			<input
				name={name}
				id={id}
				value={value}
				onChange={handleChange}
				type="number"
				className="form-control"
			/>
		</div>
	);
}

export default NumericalInput;
