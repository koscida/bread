import React, { useState } from "react";
import { useBread } from "../../context/BreadContext";
import Recipe from "./Recipe";
import Mixing from "./Mixing";
import Rising from "./Rising";
import Baking from "./Baking";
import Cooling from "./Cooling";

function Batch() {
	const { stateLabels, boardState } = useBread();
	const { state } = boardState;

	return (
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
	);
}

export default Batch;
