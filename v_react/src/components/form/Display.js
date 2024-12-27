import React from "react";

function Display({ data: { id, label, name, value, options, handleChange } }) {
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
}

export default Display;
