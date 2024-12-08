import React from "react";

function Range({ data: { id, label, name, value, options, handleChange } }) {
	const val = value ?? name;
	return (
		<div className="input-group flex-column">
			<label className="form-label p-1 me-2">
				<b>{label}</b>
			</label>
			<input
				type="range"
				class="form-range"
				min="0"
				max={options.length - 1}
				step="1"
				id={id}
				value={val}
				name={name}
				onChange={handleChange}
			/>

			<label>{options[val].label}</label>
		</div>
	);
}

export default Range;
