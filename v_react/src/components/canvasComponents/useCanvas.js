import { useRef, useEffect } from "react";

const useCanvas = (draw, options = {}) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext(options.context || "2d");
		let frameCount = 0;
		let animationFrameId;

		const render = () => {
			frameCount++;
			draw({ w: canvas.width, h: canvas.height }, context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
			// console.log(
			// 	"--render: ",
			// 	" frameCount: ",
			// 	frameCount,
			// 	" width: ",
			// 	canvas.width,
			// 	" height: ",
			// 	canvas.height
			// );
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return canvasRef;
};

export default useCanvas;
