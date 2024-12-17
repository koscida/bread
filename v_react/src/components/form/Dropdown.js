import React from "react";

function Dropdown({ data: { id, label, name, value, options, handleChange } }) {
	return (
		<div>
			<div className="input-group">
				<label className="form-label p-1 me-2" htmlFor={id}>
					<b>{label}</b>
				</label>

				<select
					className="form-select"
					id={id}
					name={name}
					aria-label={label}
					onChange={(e) => handleChange(e)}
					value={value}
				>
					{value ? <></> : <option>--Select--</option>}
					{options.map((val, i) => {
						const { optionValue, optionLabel } =
							typeof val === "object"
								? {
										optionValue: val.value ?? val.label,
										optionLabel: val.label ?? val.value,
								  }
								: { optionValue: val, optionLabel: val };
						return (
							<option key={i} value={optionValue}>
								{optionLabel}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export default Dropdown;
