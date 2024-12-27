import React from "react";

function Radios({ data: { id, label, name, value, options, handleChange } }) {
	if (name === "panTop") {
		console.log(
			" label: ",
			label,
			" name: ",
			name,
			" value: ",
			value,
			" options: ",
			options
		);
	}
	return (
		<div className="input-group flex-column">
			<label className="form-label p-1 me-2">
				<b>{label}</b>
			</label>

			{(Array.isArray(options) ? options : Object.values(options)).map(
				(val, i) => {
					const { optionValue, optionLabel } =
						typeof val === "object"
							? {
									optionValue:
										val.value ?? val.name ?? val.label,
									optionLabel:
										val.label ?? val.value ?? val.name,
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
								onChange={handleChange}
							/>
							<label
								className="form-check-label"
								htmlFor={`${name}-${optionValue}`}
							>
								{optionLabel}
								{val.color ? (
									<span
										style={{
											display: "inline-block",
											width: "50px",
											height: "10px",
											marginLeft: "0.5em",
											background: val.color,
										}}
									></span>
								) : (
									<></>
								)}
							</label>
						</div>
					);
				}
			)}
		</div>
	);
}

export default Radios;
