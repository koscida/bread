import React, { createContext, useContext, useState } from "react";

const BreadContext = createContext();

// TODO:
// baker style
// kitchen location
// different pan size
// different eggs types

// baking time
// yest rising rate
// bake longer
// pan topper

// const boardLabels = {
// 	eggs: {
// 		label: "Eggs",
// 		name: "eggs",
// 		init: 0,
// 		category: "a",
// 	},
// 	milk: {
// 		label: "Milk",
// 		name: "milk",
// 		init: 0,
// 		category: "a",
// 	},
// 	flour: {
// 		label: "Flour",
// 		name: "flour",
// 		init: 0,
// 		category: "b",
// 	},
// 	water: {
// 		label: "Water",
// 		name: "water",
// 		init: 0,
// 		category: "b",
// 	},
// 	yest: {
// 		label: "Yest",
// 		name: "yest",
// 		init: 0,
// 		category: "c",
// 	},
// 	salt: {
// 		label: "Salt",
// 		name: "salt",
// 		init: 0,
// 		category: "c",
// 	},
// 	bakingSoda: {
// 		label: "Baking Soda",
// 		name: "bakingSoda",
// 		init: 0,
// 		category: "c",
// 	},
// 	bakingPowder: {
// 		label: "Baking Powder",
// 		name: "bakingPowder",
// 		init: 0,
// 		category: "c",
// 	},
// };
// const boardCategories = Object.values(boardLabels).reduce(
// 	(cats, { category, name }) => ({
// 		...cats,
// 		[category]: cats[category] ? [...cats[category], name] : [name],
// 	}),
// 	{}
// );
// const initBoardState = Object.values(boardLabels).reduce(
// 	(bs, la) => ({
// 		...bs,
// 		[la.name]: la.init,
// 	}),
// 	{}
// );
const initBoardState = {};
initBoardState["state"] = 0;

const states = {
	0: "Recipe",
	1: "Mixing",
	2: "Rising",
	3: "Baking",
	4: "Cooling",
};

// // // // //
// Options

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
const locations = [
	"Bakery",
	"Home",
	"Farm",
	"Factory",
	"Public",
	"Car",
	"Train/Bus",
];
const ambianceTypes = ["Covered", "Random", "Surprise", "Difficult", "Instant"];

// Baker Specific
const bakerStyles = [
	"Medical",
	"Magical",
	"Anonymous",
	"Domestic",
	"Influencer",
];
const bakerExperiences = [
	"None",
	"Apprentice",
	"Journeyman",
	"Professional",
	"Expert",
];

// Loaf Specific
const loafTypes = ["Normal", "Magical"];
const loafDensities = ["Wet", "Spongy", "Dense"];
const loafTopTypes = ["Covered", "Locked", "Open"];

const panLinings = ["None", "Foil", "Silicon"];

const eggTypes = [
	"Conventional",
	"Free Range",
	"Cage-Free",
	"Organic",
	"Pasteurized",
];
const eggSizes = {
	jumbo: {
		label: "Jumbo",
		name: "jumbo",
		oz: 30,
		g: 63,
	},
	extraLarge: { label: "Extra-large", name: "extraLarge", oz: 27, g: 56 },
	large: { label: "Large", name: "large", oz: 24, g: 50 },
	medium: { label: "Medium", name: "medium", oz: 21, g: 44 },
	small: { label: "Small", name: "small", oz: 18, g: 38 },
	peewee: { label: "Peewee", name: "peewee", oz: 15, g: 32 },
};
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

const BreadProvider = ({ children }) => {
	const [boardState, setBoardState] = useState(initBoardState);

	const handleIncrease = (name) => {
		handleSet(name, boardState[name] + 1);
	};

	const handleSet = (name, val) => {
		setBoardState({ ...boardState, [name]: val });
	};

	//
	// // // //
	// group vars

	//
	// Numerical
	const panSize = {
		label: "Pan Size",
		name: "panSize",
		id: "panSize",
		value: boardState["panSize"],
		handleChange: () => handleIncrease("panSize"),
	};

	const eggAmount = {
		label: "Egg Amount",
		name: "eggAmount",
		id: "eggAmount",
		value: boardState["eggAmount"],
		handleChange: () => handleIncrease("eggAmount"),
	};

	const milk = {
		label: "Milk",
		name: "milk",
		id: "milk",
		value: boardState["milk"],
		handleChange: () => handleIncrease("milk"),
	};

	const bakingTime = {
		label: "Baking Time",
		name: "bakingTime",
		id: "bakingTime",
		value: boardState["bakingTime"],
		handleChange: () => handleIncrease("bakingTime"),
	};

	//
	// Dropdowns
	const initDropDown = (name, label, options) => ({
		name,
		id: name,
		value: boardState[name],
		handleChange: ({ target: { value } }) => handleSet(name, value),
		label,
		options: Array.isArray(options) ? options : Object.values(options),
	});

	const location = initDropDown("location", "Location", locations);
	const ambiance = initDropDown("ambiance", "Ambiance", ambianceTypes);

	const bakerStyle = initDropDown("bakerStyle", "Baker Style", bakerStyles);
	const bakerExperience = initDropDown(
		"bakerExperience",
		"Baker Experience",
		bakerExperiences
	);
	const bakerPronouns = initDropDown(
		"bakerPronouns",
		"Baker Pronouns",
		pronouns
	);

	const loafPronouns = initDropDown(
		"loafPronouns",
		"Loaf Pronouns",
		pronouns
	);
	const loafType = initDropDown("loafType", "Loaf Type", loafTypes);
	const loafTop = initDropDown("loafTop", "Loaf Top", loafTopTypes);
	const loafDensity = initDropDown(
		"loafDensity",
		"Loaf Density",
		loafDensities
	);

	const panLining = initDropDown("panLining", "Pan Lining", panLinings);

	const eggType = initDropDown("eggType", "Egg Type", eggTypes);
	const eggSize = initDropDown("eggSize", "Egg Size", eggSizes);
	const eggColor = initDropDown("eggColor", "Egg Color", eggColors);

	//
	// // // //
	// return
	return (
		<BreadContext.Provider
			value={{
				states,

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

				boardState,
				handleIncrease,
				handleSet,
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
