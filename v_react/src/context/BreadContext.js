import React, { createContext, useContext, useState } from "react";

const BreadContext = createContext();

const states = {
	0: "Recipe",
	1: "Mixing",
	2: "Rising",
	3: "Baking",
	4: "Cooling",
};

// // // // //
// Options
// value > name > label > extras

// General
const pronouns = [
	"she/her/hers",
	"he/him/his",
	"they/their/theirs",
	"e/em/ems",
	"ey/em/eirs",
	"fae/faer/faers",
	"hir/hir/hirs",
	"ne/nem/nir",
	"per/per/pers",
	"xe/xir/xirs",
	"xe/xem/xyrs",
	"ve/vir/vis",
	"ze/hir/hirs",
	"ze/zer/zers",
	"ze/zir/zirs",
];

// Location Specific
const locations = {
	Bakery: { value: "Bakery", color: "#FF69B4" },
	Home: { value: "Home", color: "#EEE8AA" },
	Farm: { value: "Farm", color: "#98FB98" },
	Factory: { value: "Factory", color: "#DAA520" },
	Public: { value: "Public", color: "#00BFFF" },
	Car: { value: "Car", color: "#778899" },
	"Train/Bus": { value: "Train/Bus", color: "#DDA0DD" },
};
const ambianceTypes = {
	Surprise: { value: "Surprise", color: "#dcd010" },
	Difficult: { value: "Difficult", color: "#cc2c2c" },
	Instant: { value: "Instant", color: "#50e0b1" },
};

// Baker Specific
const bakerStyles = {
	Medical: { value: "Medical", color: "#FF4500" },
	Magical: { value: "Magical", color: "#2E8B57" },
	Anonymous: { value: "Anonymous", color: "#008080" },
	Domestic: { value: "Domestic", color: "#FFA500" },
	Influencer: { value: "Influencer", color: "#87CEFA" },
};
const bakerExperiences = [
	{ value: 0, label: "None" },
	{ value: 1, label: "Apprentice" },
	{ value: 2, label: "Journeyman" },
	{ value: 3, label: "Professional" },
	{ value: 4, label: "Expert" },
];

// Loaf Specific
const loafDensities = {
	Wet: { value: "Wet", color: "#dcd010" },
	Spongy: { value: "Spongy", color: "#cc2c2c" },
	Dense: { value: "Dense", color: "#50e0b1" },
};
const loafExperiences = [
	{ value: 0, label: "Beginner" },
	{ value: 1, label: "Novice" },
	{ value: 2, label: "Intermediate" },
	{ value: 3, label: "Advanced" },
	{ value: 4, label: "Elite" },
];

// Pan
const panSizes = {
	1: { value: 1, label: "Small" },
	2: { value: 2, label: "Medium" },
	3: { value: 3, label: "Large" },
};
const panTypes = ["Normal", "Magical"];
const panTops = {
	1: { value: 1, label: "Open" },
	2: { value: 2, label: "Covered" },
	3: { value: 3, label: "Locked" },
};
const panLinings = {
	None: { value: "None", color: "#F5FFFA" },
	Foil: { value: "Foil", color: "#C0C0C0" },
	Silicon: { value: "Silicon", color: "#B22222" },
};

// Oven
const bakingTimes = [
	{ value: 0, label: "Short" },
	{ value: 1, label: "" },
	{ value: 2, label: "Medium" },
	{ value: 3, label: "" },
	{ value: 4, label: "Long" },
];
const ovenTemps = [
	{ value: 0, label: "Extra Cold" },
	{ value: 1, label: "Cold" },
	{ value: 2, label: "Medium" },
	{ value: 3, label: "Hot" },
	{ value: 4, label: "Extra Hot" },
];

// Ingredients
const eggTypes = [
	"Conventional",
	"Pasteurized",
	"Cage-Free",
	"Free Range",
	"Organic",
];
const eggSizes = [
	{ value: 0, label: "Peewee", name: "peewee", oz: 15, g: 32 },
	{ value: 1, label: "Small", name: "small", oz: 18, g: 38 },
	{ value: 2, label: "Medium", name: "medium", oz: 21, g: 44 },
	{ value: 3, label: "Large", name: "large", oz: 24, g: 50 },
	{
		value: 4,
		label: "Extra-large",
		name: "extraLarge",
		oz: 27,
		g: 56,
	},
	{
		value: 5,
		label: "Jumbo",
		name: "jumbo",
		oz: 30,
		g: 63,
	},
];
const colors = {
	White: { value: "White", color: "#F8F8FF" },
	Brown: { value: "Brown", color: "#A0522D" },
	Black: { value: "Black", color: "#000000" },
	Red: { value: "Red", color: "#DC143C" },
	Orange: { value: "Orange", color: "#FF7F50" },
	Yellow: { value: "Yellow", color: "#FFD700" },
	Green: { value: "Green", color: "#32CD32" },
	Blue: { value: "Blue", color: "#1E90FF" },
	Purple: { value: "Purple", color: "#9932CC" },
	Pink: { value: "Pink", color: "#FF69B4" },
	Indigo: { value: "Indigo", color: "#483D8B" },
	Grey: { value: "Grey", color: "#696969" },
	Gold: { value: "Gold", color: "#DAA520" },
	Silver: { value: "Silver", color: "#A9A9A9" },
};

const getMidPoint = (options) => {
	const isArray = Array.isArray(options);

	const mid = isArray
		? Math.floor((options.length - 1) / 2)
		: Math.floor((Object.keys(options).length - 1) / 2);

	const midOpt = isArray ? options[mid] : options[Object.keys(options)[mid]];

	if (typeof midOpt === "string") return midOpt;
	else if (typeof midOpt === "object") {
		if (midOpt.value) return midOpt.value;
		if (midOpt.name) return midOpt.name;
		if (midOpt.label) return midOpt.label;
		return mid;
	} else {
		return midOpt;
	}
};
const getFirstPoint = (options) => {
	var first = 0;
	if (!Array.isArray(options)) {
		first = Object.keys(options)[0];
	}
	const firstOpt = options[first];
	if (typeof firstOpt === "string") return firstOpt;
	else if (firstOpt.value) return firstOpt.value;
	else if (firstOpt.name) return firstOpt.name;
	else if (firstOpt.label) return firstOpt.label;
	return first;
};

const BreadProvider = ({ children }) => {
	const [boardState, setBoardState] = useState({
		state: 0,
		page: 0,

		location: getFirstPoint(locations),
		ambiance: getFirstPoint(ambianceTypes),

		bakerStyle: getFirstPoint(bakerStyles),
		bakerExperience: getMidPoint(bakerExperiences),
		bakerPronouns: getFirstPoint(pronouns),

		loafExperience: getMidPoint(loafExperiences),
		loafPronouns: getFirstPoint(pronouns),
		loafDensity: getFirstPoint(loafDensities),
		panSize: getMidPoint(panSizes),
		panType: getFirstPoint(panTypes),
		panLining: getFirstPoint(panLinings),
		panTop: getFirstPoint(panTops),
		bakingTime: getMidPoint(bakingTimes),
		ovenTemp: getMidPoint(ovenTemps),

		eggType: getFirstPoint(eggTypes),
		eggSize: getMidPoint(eggSizes),
		eggColor: getFirstPoint(colors),

		sugarAmount: 0,
		icingAmount: 0,
		eggAmount: 0,
		milkAmount: 0,
	});

	// // // // //
	// Handlers

	// Private handlers
	const handleSet = (name, val) => {
		setBoardState({ ...boardState, [name]: val });
	};

	// Public Handlers
	const nextPage = () => {
		const newPage = boardState["page"] + 1;
		const newState =
			newPage > boardState["state"] ? newPage : boardState["state"];
		setBoardState({
			...boardState,
			page: newPage,
			state: newState,
			editing: null,
		});
	};
	const editPage = (page) => {
		setBoardState({
			...boardState,
			editing: page,
		});
	};
	const goToPage = (i) => {
		setBoardState({
			...boardState,
			page: parseInt(i),
		});
	};

	//
	// // // //
	// Create vars

	// Helpers for init vars with specific format
	const handelSetText =
		(name) =>
		({ target: { value } }) =>
			handleSet(name, value);
	const handleSetInt =
		(name) =>
		({ target: { value } }) =>
			handleSet(name, parseInt(value));
	const initBase = (name, label) => ({
		id: name,
		name,
		value: boardState[name],
		label,
	});
	const initBaseOptions = (name, label, options) => ({
		...initBase(name, label),
		options,
	});
	const initNumerical = (name, label) => ({
		...initBase(name, label),
		dataType: "integer",
		handleChange: handleSetInt(name),
	});
	const initDropDown = (name, label, options) => ({
		...initBaseOptions(name, label, options),
		dataType: "dropdown",
		handleChange: handelSetText(name),
	});
	const initRadio = (name, label, options) => ({
		...initDropDown(name, label, options),
		dataType: "radio",
	});
	const initNumericalRadio = (name, label, options) => ({
		...initBaseOptions(name, label, options),
		dataType: "radio",
		handleChange: handleSetInt(name),
	});
	const initRange = (name, label, options) => ({
		...initBaseOptions(name, label, options),
		dataType: "range",
		handleChange: handleSetInt(name),
	});

	// //
	// Recipe

	// Location
	const location = initRadio("location", "Location", locations);
	const ambiance = initRadio("ambiance", "Ambiance", ambianceTypes);

	// Baker
	const bakerStyle = initRadio("bakerStyle", "Baker Style", bakerStyles);
	const bakerExperience = initRange(
		"bakerExperience",
		"Baker Experience",
		bakerExperiences
	);
	const bakerPronouns = initDropDown(
		"bakerPronouns",
		"Baker Pronouns",
		pronouns
	);

	// Loaf
	const loafExperience = initRange(
		"loafExperience",
		"Loaf Experience",
		loafExperiences
	);
	const loafPronouns = initDropDown(
		"loafPronouns",
		"Loaf Pronouns",
		pronouns
	);
	const loafDensity = initRadio("loafDensity", "Loaf Density", loafDensities);

	// Pan
	const panSize = initRange("panSize", "Pan Size", panSizes);
	const panLining = initRadio("panLining", "Pan Lining", panLinings);
	const panType = initRadio("panType", "Pan Type", panTypes);
	const panTop = initNumericalRadio("panTop", "Pan Top", panTops);

	// Oven
	const bakingTime = initRange("bakingTime", "Baking Time", bakingTimes);
	const ovenTemp = initRange("ovenTemp", "Oven Temp", ovenTemps);

	// Ingredients
	const eggType = initRadio("eggType", "Egg Type", eggTypes);
	const eggSize = initRange("eggSize", "Egg Size", eggSizes);
	const eggColor = initDropDown("eggColor", "Egg Color", colors);

	// //
	// Mixing

	// Baker
	const sugarAmount = initNumerical("sugarAmount", "Sugar Amount");
	const icingAmount = initNumerical("icingAmount", "Icing Amount");

	const eggAmount = initNumerical("eggAmount", "Egg Amount");
	const milkAmount = initNumerical("milkAmount", "Milk Amount");

	//
	// // // //
	// return
	return (
		<BreadContext.Provider
			value={{
				boardState,
				states,

				location,
				ambiance,

				bakerStyle,
				bakerExperience,
				bakerPronouns,

				loafExperience,
				loafPronouns,
				loafDensity,

				panLining,
				panType,
				panSize,
				panTop,

				bakingTime,
				ovenTemp,

				eggType,
				eggSize,
				eggColor,

				sugarAmount,
				eggAmount,
				milkAmount,
				icingAmount,

				nextPage,
				editPage,
				goToPage,
			}}
		>
			{children}
		</BreadContext.Provider>
	);
};

const useBread = () => {
	return useContext(BreadContext);
};

export { BreadProvider, useBread };
