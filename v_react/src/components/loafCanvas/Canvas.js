import React from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
	const { draw, width, height, ...rest } = props;
	const canvasRef = useCanvas(draw);

	return (
		<canvas
			width={width ?? "100%"}
			height={height ?? "100%"}
			ref={canvasRef}
			{...rest}
		/>
	);
};

export default Canvas;
