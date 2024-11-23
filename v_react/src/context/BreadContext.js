import React, { createContext, useContext, useState } from "react";

const BreadContext = createContext();

const boardLabels = {
	eggs: {
		label: "Eggs",
		name: "eggs",
		init: 0,
		category: "a",
	},
	milk: {
		label: "Milk",
		name: "milk",
		init: 0,
		category: "a",
	},
	flour: {
		label: "Flour",
		name: "flour",
		init: 0,
		category: "b",
	},
	water: {
		label: "Water",
		name: "water",
		init: 0,
		category: "b",
	},
	yest: {
		label: "Yest",
		name: "yest",
		init: 0,
		category: "c",
	},
	salt: {
		label: "Salt",
		name: "salt",
		init: 0,
		category: "c",
	},
	bakingSoda: {
		label: "Baking Soda",
		name: "bakingSoda",
		init: 0,
		category: "c",
	},
	bakingPowder: {
		label: "Baking Powder",
		name: "bakingPowder",
		init: 0,
		category: "c",
	},
};
const boardCategories = Object.values(boardLabels).reduce(
	(cats, { category, name }) => ({
		...cats,
		[category]: cats[category] ? [...cats[category], name] : [name],
	}),
	{}
);

const BreadProvider = ({ children }) => {
	const [boardState, setBoardState] = useState(
		Object.values(boardLabels).reduce(
			(bs, la) => ({
				...bs,
				[la.name]: la.init,
			}),
			{}
		)
	);

	const handleIncrease = (name) => {
		setBoardState({ ...boardState, [name]: boardState[name] + 1 });
	};

	return (
		<BreadContext.Provider
			value={{ boardLabels, boardCategories, boardState, handleIncrease }}
		>
			{children}
		</BreadContext.Provider>
	);
};

const useBread = () => {
	return useContext(BreadContext);
};

export { BreadProvider, useBread };
