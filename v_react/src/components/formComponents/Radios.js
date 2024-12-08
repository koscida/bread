import React from "react";

function Radios({ data: { id, label, name, value, options, handleChange } }) {
	return (
		<div className="input-group flex-column">
			<label className="form-label p-1 me-2">
				<b>{label}</b>
			</label>

			{options.map((val, i) => {
				const { optionValue, optionLabel } =
					typeof val === "object"
						? {
								optionValue: val.value ?? val.name,
								optionLabel: val.label ?? val.value,
						  }
						: { optionValue: val, optionLabel: val };
				return (
					<div className="form-check" key={i}>
						<input
							className="form-check-input"
							type="radio"
							name={name}
							id={`${name}-${optionValue}`}
							value={optionValue}
							checked={optionValue === value}
							onChange={(e) => handleChange(e)}
						/>
						<label
							className="form-check-label"
							htmlFor={`${name}-${optionValue}`}
						>
							{optionLabel}
						</label>
					</div>
				);
			})}
		</div>
	);
}

export default Radios;
