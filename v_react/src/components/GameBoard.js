import React, { useState } from "react";
import { useBread } from "../context/BreadContext";
import Recipe from "./pages/Recipe";
import Mixing from "./pages/Mixing";
import Rising from "./pages/Rising";
import Baking from "./pages/Baking";
import Cooling from "./pages/Cooling";
import Loaf from "./loafCanvas/Loaf";
import BreadCrumbs from "./navigation/BreadCrumbs";
import Button from "./form/Button";

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
					<div
						style={{
							overflowY: "scroll",
							overflowX: "hidden",
							height: "calc(100vh - 220px)",
						}}
						className="pe-3"
					>
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
					<h2>Loaf</h2>
					<hr />
					<Loaf />
				</div>
			</div>

			<PrintBoardState />
		</div>
	);
}
export default GameBoard;
