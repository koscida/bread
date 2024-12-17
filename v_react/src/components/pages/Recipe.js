import React, { Fragment } from "react";
import Button from "../form/Button";
import { useBread } from "../../context/BreadContext";
import TextInput from "../form/TextInput";
import NumericalInput from "../form/NumericalInput";
import Dropdown from "../form/Dropdown";
import Radios from "../form/Radios";
import Input from "../form/Input";

function Recipe() {
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

		editPage,

		// eggAmount,
		// milk,
		// time,
		boardState,
	} = useBread();
	const { state, editing } = boardState;
	const isNew = state === 0,
		isEditing = isNew || editing === 0;

	return (
		<>
			{!isNew && !isEditing ? (
				<Button label={"Edit"} handleClick={() => editPage(0)} />
			) : (
				<></>
			)}

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Setting</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={location} isEditing={isEditing} />
							<Input data={ambiance} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Baker</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={bakerStyle} isEditing={isEditing} />
							<Input
								data={bakerExperience}
								isEditing={isEditing}
							/>
						</div>
						<div className="inputGrouping">
							<Input data={bakerPronouns} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Loaf</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={loafPronouns} isEditing={isEditing} />
						</div>
						<div className="inputGrouping">
							<Input data={loafType} isEditing={isEditing} />
							<Input data={loafDensity} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Pan</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={panSize} isEditing={isEditing} />
						</div>
						<div className="inputGrouping">
							<Input data={panLining} isEditing={isEditing} />
							<Input data={panTop} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Oven</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={bakingTime} isEditing={isEditing} />
							<Input data={ovenTemp} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>

			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Ingredients</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={eggType} isEditing={isEditing} />
							<Input data={eggColor} isEditing={isEditing} />
						</div>
						<div className="inputGrouping">
							<Input data={eggSize} isEditing={isEditing} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Recipe;
