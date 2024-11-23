import React, { useState } from "react";
import { useBread } from "../context/BreadContext";
import Button from "./formComponents/Button";

function Baking() {
	const { boardLabels, boardCategories, boardState, handleIncrease } =
		useBread();

	return (
		<div>
			<div className="row">
				<div className="col">
					{Object.entries(boardState).map(([name, val]) => (
						<p key={name}>
							{boardLabels[name].label}: {val}
						</p>
					))}
				</div>

				<div className="col">
					{Object.entries(boardCategories).map(([catName, names]) => (
						<div key={catName}>
							<p>{catName}</p>
							{names.map((name) => (
								<Button
									key={boardLabels[name].label}
									label={boardLabels[name].label}
									handleClick={() => handleIncrease(name)}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Baking;
