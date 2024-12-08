import React from "react";
import { useBread } from "../context/BreadContext";

function Mixing() {
	const {
		location,
		ambiance,

		bakerStyle,
		bakerExperience,
		bakerPronouns,

		loafPronouns,
		loafType,
		loafDensity,

		bakingTime,
		ovenTemp,

		panLining,
		panSize,
		panTop,

		eggType,
		eggSize,
		eggColor,
	} = useBread();
	return (
		<>
			<div className="row">
				<div className="col">
					<div>
						<h3>Location:</h3>
						<p>
							{location.value}, {ambiance.value}
						</p>
					</div>
					<div>
						<h3>Baker ({bakerPronouns.value}):</h3>
						<p>
							Style: {bakerStyle.value}, Experience:{" "}
							{
								bakerExperience.options[bakerExperience.value]
									.label
							}
						</p>
					</div>
					<div>
						<h3>Loaf ({loafPronouns.value}):</h3>
						<p>
							Type: {loafType.value}, Density: {loafDensity.value}
						</p>
						<p>
							Baking Time:{" "}
							{bakingTime.options[bakingTime.value].label}, Oven
							Temp: {ovenTemp.options[ovenTemp.value].label}
						</p>
						<p>
							Pan Lining: {panLining.value}, Pan Size:{" "}
							{panSize.options[panSize.value].label}, Pan Top:{" "}
							{panTop.value}
						</p>
					</div>
				</div>
				<div className="col">
					<h4>Bowl</h4>
					<hr />
				</div>
			</div>
		</>
	);
}
export default Mixing;
