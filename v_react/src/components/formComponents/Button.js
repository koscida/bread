import React from "react";

function Button({ label, handleClick }) {
	return (
		<button
			type="button"
			className="btn btn-primary m-1"
			onClick={handleClick}
		>
			{label}
		</button>
	);
}
export default Button;
