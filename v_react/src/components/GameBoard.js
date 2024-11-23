import React from "react";
import Baking from "./Baking";

function GameBoard() {
	return (
		<>
			<div className="row">
				<p className="text-center">Bread Game</p>
			</div>
			<div className="row">
				<div className="col">
					<p>Loafs:</p>
				</div>

				<div className="col">
					<p>Baking:</p>
					<Baking />
				</div>
			</div>
		</>
	);
}
export default GameBoard;
