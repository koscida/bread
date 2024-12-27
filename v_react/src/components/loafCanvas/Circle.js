function Circle(ctx, x, y, r, options = {}) {
	const { fill, stroke, lineWidth } = options;

	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);

	if (!fill && !stroke) {
		ctx.lineWidth = lineWidth ?? 1;
		ctx.strokeStyle = "black";
		ctx.stroke();
	} else if (fill && !stroke) {
		ctx.fillStyle = fill;
		ctx.fill();
		ctx.lineWidth = 0;
		ctx.strokeStyle = "transparent";
		ctx.stroke();
	} else if (stroke) {
		ctx.lineWidth = lineWidth ?? 1;
		ctx.strokeStyle = stroke;
		ctx.stroke();
	}
}

export default Circle;
