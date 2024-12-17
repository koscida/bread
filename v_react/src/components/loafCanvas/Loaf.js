import React from "react";
import Canvas from "./Canvas";
import { useBread } from "../../context/BreadContext";
import Rect from "./Rect";
import Text from "./Text";

function Loaf() {
	const { location, ambiance, boardState } = useBread();
	const { state, page, editing, bakerPronouns, loafPronouns } = boardState;

	const draw = (size, ctx, frameCount) => {
		const { w, h } = size;

		// Location
		Rect(ctx, 0, 0, w, h, { fill: location.options[location.value].color });

		// Ambiance
		Rect(ctx, 3, 3, w - 6, h - 6, {
			stroke: ambiance.options[ambiance.value].color,
		});

		// Pronouns
		Text(ctx, bakerPronouns, 10, h - 10);
		Text(ctx, loafPronouns, w - 10, h - 10, { align: "right" });

		// Dot
		// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		// ctx.fillStyle = "#000000";
		// ctx.beginPath();
		// ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
		// ctx.fill();
	};

	return (
		<div>
			<Canvas draw={draw} width={"300"} height={"300"} />
		</div>
	);
}

export default Loaf;
