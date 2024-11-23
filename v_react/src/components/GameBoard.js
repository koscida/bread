import React from "react";
import Baking from "./Baking";

function GameBoard() {
	return (
		<div className="mt-3 mb-3">
			<div className="row">
				<p className="text-center">Bread Game</p>
			</div>
			<div className="row">
				<div className="col">
					<p>Loafs</p>
					<hr />
				</div>

				<div className="col">
					<p>Baking</p>
					<hr />
					<Baking />
				</div>
			</div>
		</div>
	);
}
export default GameBoard;
