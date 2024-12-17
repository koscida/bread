function Text(ctx, msg, x, y, options = null) {
	const { font, fill, stroke, align, baseline } = options ?? {};

	ctx.font = font ?? "11px Arial";
	ctx.textAlign = align ?? "start";
	ctx.textBaseline = baseline ?? "alphabetic";

	if (stroke) {
		ctx.strokeStyle = stroke;
		ctx.strokeText(msg, x, y);
	} else {
		ctx.fillStyle = fill ?? "black";
		ctx.fillText(msg, x, y);
	}
}

export default Text;
