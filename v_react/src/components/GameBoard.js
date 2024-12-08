import React, { useState } from "react";
import { useBread } from "../context/BreadContext";
import Recipe from "./Recipe";
import Mixing from "./Mixing";
import Rising from "./Rising";
import Baking from "./Baking";
import Cooling from "./Cooling";
import BreadCrumbs from "./navigation/BreadCrumbs";
import Button from "./formComponents/Button";

function GameBoard() {
	const { boardState, handleIncrease } = useBread();
	const { state } = boardState;

	const handleClickNext = () => {
		let isValid = true;
		// validation
		// if (!(capacity.value > 0)) {
		// 	isValid = false;
		// }

		if (isValid) handleIncrease("state");
	};

	const PrintBoardState = () => (
		<>
			<hr />
			<div>
				{Object.entries(boardState).map(([attr, val]) => (
					<div key={attr}>
						{attr} : {JSON.stringify(val)}
					</div>
				))}
			</div>
			<br />
			<div>{JSON.stringify(boardState)}</div>
		</>
	);

	return (
		<div className="mt-3 mb-3">
			<div className="row">
				<h1 className="text-center">Bread Game</h1>
			</div>
			<div className="row">
				<div className="col">
					<h2>Baking</h2>
					<hr />
					<BreadCrumbs />
					<div>
						{state === 0 ? (
							<Recipe />
						) : state === 1 ? (
							<Mixing />
						) : state === 2 ? (
							<Rising />
						) : state === 3 ? (
							<Baking />
						) : (
							<Cooling />
						)}
					</div>
					<div className="mb-3 pb-3 d-flex justify-content-end">
						<Button label={"Next"} handleClick={handleClickNext} />
					</div>
				</div>

				<div className="col">
					<h2>Loafs</h2>
					<hr />
					<p>No loafs yet</p>
				</div>
			</div>

			<PrintBoardState />
		</div>
	);
}
export default GameBoard;
