import React, { Fragment } from "react";
import Button from "./formComponents/Button";
import { useBread } from "../context/BreadContext";
import TextInput from "./formComponents/TextInput";
import NumericalInput from "./formComponents/NumericalInput";
import Dropdown from "./formComponents/Dropdown";
import Radios from "./formComponents/Radios";
import BreadCrumbs from "./navigation/BreadCrumbs";

const groupStyles = {
	borderBottom: "1px solid #0003",
	marginBottom: "1em",
	paddingBottom: "1em",
};
const inputStyles = {
	display: "flex",
	marginBottom: "1em",
	gap: "0.5em",
};

function Recipe() {
	const {
		location,
		ambiance,

		bakerStyle,
		bakerExperience,
		bakerPronouns,

		loafPronouns,
		loafType,
		loafTop,
		loafDensity,

		eggType,
		eggSize,
		eggColor,

		panLining,
		panSize,
		bakingTime,
		// eggAmount,
		// milk,
		// time,
	} = useBread();

	return (
		<>
			<div className="section">
				<h5>Setting</h5>

				<div className="inputGrouping">
					<Dropdown data={location} />
					<Dropdown data={ambiance} />
				</div>
			</div>

			<div className="section">
				<h5>Baker</h5>

				<div className="inputGrouping">
					<Dropdown data={bakerStyle} />
					<Dropdown data={bakerExperience} />
				</div>
				<div className="inputGrouping">
					<Dropdown data={bakerPronouns} />
				</div>
			</div>

			<div className="section">
				<h5>Loaf</h5>

				<div className="inputGrouping">
					<Dropdown data={loafPronouns} />
				</div>
				<hr />
				<div className="inputGrouping">
					<Dropdown data={loafType} />
					<Dropdown data={loafDensity} />
				</div>
				<hr />
				<div className="inputGrouping">
					<NumericalInput data={panSize} />
					<NumericalInput data={bakingTime} />
				</div>
				<div className="inputGrouping">
					<Dropdown data={panLining} />
					<Dropdown data={loafTop} />
				</div>
				<hr />
				<div className="inputGrouping">
					<Dropdown data={eggType} />
					<Dropdown data={eggSize} />
					<Dropdown data={eggColor} />
				</div>
			</div>
		</>
	);
}
export default Recipe;
