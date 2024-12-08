import React from "react";
import Canvas from "./canvasComponents/Canvas";
import { useBread } from "../context/BreadContext";

function Loaf() {
	const { location, boardState } = useBread();
	const { state, page, editing } = boardState;

	const draw = (size, ctx, frameCount) => {
		const { w, h } = size;

		// Location
		ctx.fillStyle = location.options[location.value].color;
		ctx.fillRect(0, 0, w, h);
		ctx.fill();

		// Dot
		// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		// ctx.fillStyle = "#000000";
		// ctx.beginPath();
		// ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
		// ctx.fill();
	};

	return (
		<div>
			<p>Loaf</p>
			<Canvas draw={draw} />
		</div>
	);
}

export default Loaf;
