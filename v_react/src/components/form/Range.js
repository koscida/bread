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
				className="form-range"
				min={
					Array.isArray(options)
						? 0
						: Object.values(options).reduce(
								(m, o) => (o.value < m ? o.value : m),
								Number.MAX_VALUE
						  )
				}
				max={
					Array.isArray(options)
						? options.length - 1
						: Object.values(options).reduce(
								(m, o) => (o.value > m ? o.value : m),
								Number.MIN_VALUE
						  )
				}
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
