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
const ambianceTypes = ["Surprise", "Difficult", "Instant"];

// Baker Specific
const bakerStyles = [
	"Medical",
	"Magical",
	"Anonymous",
	"Domestic",
	"Influencer",
];
const bakerExperiences = [
	{ value: 0, label: "None" },
	{ value: 1, label: "Apprentice" },
	{ value: 2, label: "Journeyman" },
	{ value: 3, label: "Professional" },
	{ value: 4, label: "Expert" },
];

// Loaf Specific
const loafTypes = ["Normal", "Magical"];
const loafDensities = ["Wet", "Spongy", "Dense"];

// Pan
const panSizes = [
	{ value: 0, label: "Small" },
	{ value: 1, label: "Medium" },
	{ value: 2, label: "Large" },
];
const panTops = ["Covered", "Locked", "Open"];
const panLinings = ["None", "Foil", "Silicon"];

// Oven
const bakingTimes = [
	{ value: 0, label: "Short" },
	{ value: 1, label: "Medium" },
	{ value: 2, label: "Long" },
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
	"Free Range",
	"Cage-Free",
	"Organic",
	"Pasteurized",
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
const eggColors = [
	"White",
	"Brown",
	"Black",
	"Red",
	"Orange",
	"Yellow",
	"Green",
	"Blue",
	"Purple",
	"Pink",
	"Indigo",
	"Grey",
	"Gold",
	"Silver",
	"Rainbow",
	"Random",
];

const getMidPoint = (options) => {
	if (Array.isArray(options)) {
		const mid = Math.floor((options.length - 1) / 2);
		if (typeof options[mid] === "object") {
			if (options[mid].value) return options[mid].value;
			if (options[mid].name) return options[mid].name;
			if (options[mid].label) return options[mid].label;
			return options[Object.keys(options)[0]];
		}
	} else {
		const mid = Math.floor((Object.keys(options).length - 1) / 2);
		return Object.keys(options)[mid];
	}
};
const getFirstPoint = (options) => {
	var first = 0;
	if (!Array.isArray(options)) {
		first = Object.keys(options)[0];
	}
	if (options[first].value) return options[first].value;
	if (options[first].name) return options[first].name;
	if (options[first].label) return options[first].label;
	return options[first][Object.keys(options[first])[0]];
};

const BreadProvider = ({ children }) => {
	const [boardState, setBoardState] = useState({
		state: 0,
		page: 0,

		location: getFirstPoint(locations),
		ambiance: ambianceTypes[0],
		bakerStyle: bakerStyles[0],
		bakerExperience: getMidPoint(bakerExperiences),
		bakerPronouns: pronouns[0],
		loafPronouns: pronouns[0],
		loafType: loafTypes[0],
		loafDensity: loafDensities[0],
		panSize: getMidPoint(panSizes),
		panLining: panLinings[0],
		panTop: panTops[0],
		bakingTime: getMidPoint(bakingTimes),
		ovenTemp: getMidPoint(ovenTemps),
		eggType: eggTypes[0],
		eggSize: getMidPoint(eggSizes),
		eggColor: eggColors[0],
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
	const initNumerical = (name, label) => ({
		dataType: "integer",
		name,
		id: name,
		value: boardState[name],
		handleChange: ({ target: { value } }) =>
			handleSet(name, parseInt(value)),
		label,
	});
	const initDropDown = (name, label, options) => ({
		dataType: "dropdown",
		name,
		id: name,
		value: boardState[name],
		handleChange: ({ target: { value } }) => handleSet(name, value),
		label,
		options,
	});
	const initRadio = (name, label, options) => ({
		...initDropDown(name, label, options),
		dataType: "radio",
	});
	const initRange = (name, label, options) => ({
		...initDropDown(name, label, options),
		dataType: "range",
	});

	//
	// Recipe Settings

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
	const loafPronouns = initDropDown(
		"loafPronouns",
		"Loaf Pronouns",
		pronouns
	);
	const loafType = initRadio("loafType", "Loaf Type", loafTypes);
	const loafDensity = initRadio("loafDensity", "Loaf Density", loafDensities);

	// Pan
	const panSize = initRange("panSize", "Pan Size", panSizes);
	const panLining = initRadio("panLining", "Pan Lining", panLinings);
	const panTop = initRadio("panTop", "Pan Top", panTops);

	// Oven
	const bakingTime = initRange("bakingTime", "Baking Time", bakingTimes);
	const ovenTemp = initRange("ovenTemp", "Oven Temp", ovenTemps);

	// Ingredients
	const eggType = initRadio("eggType", "Egg Type", eggTypes);
	const eggSize = initRange("eggSize", "Egg Size", eggSizes);
	const eggColor = initDropDown("eggColor", "Egg Color", eggColors);

	//
	// Mixing
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

				// eggAmount,
				// milkAmount,

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
