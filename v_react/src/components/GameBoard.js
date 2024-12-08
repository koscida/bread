import React, { useState } from "react";
import { useBread } from "../context/BreadContext";
import Mixing from "./Mixing";
import Rising from "./Rising";
import Baking from "./Baking";
import Cooling from "./Cooling";
import BreadCrumbs from "./navigation/BreadCrumbs";
import Button from "./formComponents/Button";
import Recipe from "./Recipe";

function GameBoard() {
	const { boardState, nextPage } = useBread();
	const { state, page, editing } = boardState;

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
						{page === 0 ? (
							<Recipe />
						) : page === 1 ? (
							<Mixing />
						) : page === 2 ? (
							<Rising />
						) : page === 3 ? (
							<Baking />
						) : (
							<Cooling />
						)}
					</div>
					<div className="mb-3 pb-3 d-flex justify-content-end">
						<Button label={"Next Page"} handleClick={nextPage} />
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
