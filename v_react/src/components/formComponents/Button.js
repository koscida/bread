import React from "react";

function Button({ label, handleClick }) {
	return (
		<button type="button" class="btn btn-light m-1" onClick={handleClick}>
			{label}
		</button>
	);
}
export default Button;
