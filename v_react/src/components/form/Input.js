import React from "react";
import Dropdown from "./Dropdown";
import NumericalInput from "./NumericalInput";
import TextInput from "./TextInput";
import Radios from "./Radios";
import Range from "./Range";
import Display from "./Display";
import Numerical from "./Numerical";

function Input({ data, isEditing = true }) {
	const { dataType } = data;

	return isEditing ? (
		dataType === "dropdown" ? (
			<Dropdown data={data} />
		) : dataType === "radio" ? (
			<Radios data={data} />
		) : dataType === "range" ? (
			<Range data={data} />
		) : dataType === "integer" ? (
			<Numerical data={data} />
		) : (
			<TextInput data={data} />
		)
	) : (
		<Display data={data} />
	);
}

export default Input;
