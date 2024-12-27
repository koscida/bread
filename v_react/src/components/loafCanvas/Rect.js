function Rect(ctx, x, y, w, h, options = {}) {
	const { fill, stroke, lineWidth } = options;

	if (fill) {
		ctx.fillStyle = fill ?? "black";
		ctx.fillRect(x, y, w, h);
	}
	if (stroke) {
		ctx.strokeStyle = stroke ?? "black";
		ctx.lineWidth = lineWidth ?? 1;
		ctx.strokeRect(x, y, w, h);
	}
}

export default Rect;
