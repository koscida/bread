import React from "react";

function Rect(ctx, x, y, w, h, options) {
	const { fill, stroke } = options;

	if (fill) {
		ctx.fillStyle = fill;
		ctx.fillRect(x, y, w, h);
		ctx.fill();
	} else if (stroke) {
		ctx.strokeStyle = stroke;
		ctx.rect(x, y, w, h);
		ctx.stroke();
	} else {
		ctx.rect(x, y, w, h);
		ctx.fill();
	}
}

export default Rect;
