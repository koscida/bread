import React from "react";
import Button from "./Button";

function Numerical({
	data: { id, label, name, value, handleChange },
	addon = null,
}) {
	return (
		<div className="input-group flex-column">
			<label className="form-label p-1 me-2" htmlFor={id}>
				<b>{label}</b>
			</label>

			{/* <div className="d-flex flex-row justify-content-between">
				<Button
					label={"-"}
					handleClick={handleChange}
					value={value - 1}
					style={{ flex: "1 1" }}
				/>
				<div
					style={{
						flex: "10 0 auto",
						textAlign: "center",
						lineHeight: "1.5em",
						padding: ".375rem .75rem",
						margin: ".25rem",
					}}
				>
					{value}
				</div>
				<Button
					label={"+"}
					handleClick={handleChange}
					value={value + 1}
					style={{ flex: "1 1" }}
				/>
			</div> */}

			<div className="input-group mb-3">
				<button
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon1"
					value={value - 1}
					name={name}
					onClick={handleChange}
				>
					-
				</button>
				<input
					type="text"
					className="form-control"
					placeholder=""
					aria-label="Example text with button addon"
					aria-describedby="button-addon1"
					value={value}
					name={name}
					onChange={handleChange}
				/>
				<button
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
					value={value + 1}
					name={name}
					onClick={handleChange}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Numerical;
