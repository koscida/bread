import React, { useState } from "react";
import { useBread } from "../context/BreadContext";
import Button from "./formComponents/Button";

function Baking() {
	const { capacity, volume, volumeState, handleIncreaseVolume } = useBread();

	const ing = {
		0: [
			{ label: "Eggs", val: "eggs", handle: handleIncreaseVolume },
			{ label: "Milk", val: "milk", handle: handleIncreaseVolume },
		],
		1: [
			{ label: "Flour", val: "flour", handle: handleIncreaseVolume },
			{ label: "Water", val: "water", handle: handleIncreaseVolume },
		],
		2: [
			{ label: "Yest", val: "yest", handle: handleIncreaseVolume },
			{ label: "Salt", val: "salt", handle: handleIncreaseVolume },
		],
		3: [
			{
				label: "Baking Soda",
				val: "bakingSoda",
				handle: handleIncreaseVolume,
			},
			{
				label: "Baking Flour",
				val: "bakingFlour",
				handle: handleIncreaseVolume,
			},
		],
	};

	return (
		<div>
			<div>
				<div>Volume: {volume}</div>
				<div>Capacity: {capacity}</div>
				<div>Volume State: {volumeState}</div>
			</div>

			{Object.entries(ing).map(([catName, categories]) => {
				return (
					<div>
						<p>{catName}</p>
						{categories.map(({ label, handle }) => (
							<Button label={label} handleClick={handle} />
						))}
					</div>
				);
			})}
		</div>
	);
}

export default Baking;
