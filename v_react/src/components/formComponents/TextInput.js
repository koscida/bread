import React from "react";

function TextInput({
	data: { id, label, name, value, handleChange },
	addon = null,
}) {
	return (
		<div className="input-group">
			<label className="form-label p-1 me-2" htmlFor={id}>
				{label}
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
				value={value}
				onChange={handleChange}
				type="text"
				className="form-control"
				aria-label={name}
				aria-describedby="basic-addon1"
			/>
		</div>
	);
}

export default TextInput;
