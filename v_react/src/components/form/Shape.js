function Shape(ctx, x, y, radius, type, options = {}) {
	const { fill, stroke, lineWidth } = options;

	// Set start-point
	ctx.beginPath();

	// Set sub-points
	switch (type) {
		case "pentagon":
			ctx.moveTo(x, y - radius);
			ctx.lineTo(x + radius, y - radius * (1 / 3));
			ctx.lineTo(x + radius * (3 / 5), y + radius);
			ctx.lineTo(x - radius * (3 / 5), y + radius);
			ctx.lineTo(x - radius, y - radius * (1 / 3));

			ctx.lineTo(x, y - radius);
			break;

		case "hexagon":
			const y1 = radius,
				x1 = 0.6 * radius;
			ctx.moveTo(x + x1, y - y1);
			ctx.lineTo(x + x1 * 2, y);
			ctx.lineTo(x + x1, y + y1);
			ctx.lineTo(x - x1, y + y1);
			ctx.lineTo(x - x1 * 2, y);
			ctx.lineTo(x - x1, y - y1);

			ctx.lineTo(x + x1, y - y1);
			break;

		default:
		case "triangle":
			ctx.moveTo(x, y - radius);
			ctx.lineTo(x + radius, y + radius);
			ctx.lineTo(x - radius, y + radius);

			ctx.lineTo(x, y - radius);
			break;
	}

	// Stroke it (do the drawing)
	if (fill) {
		ctx.fillStyle = fill;
		ctx.fill();
	}
	if (stroke) {
		ctx.strokeStyle = stroke;
		ctx.lineWidth = lineWidth ?? 1;
		ctx.stroke();
	}
}

export default Shape;
