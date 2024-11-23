import React, { createContext, useContext, useState } from "react";

const BreadContext = createContext();

const BreadProvider = ({ children }) => {
	const [volume, setVolume] = useState(0);
	const [volumeState, setVolumeState] = useState("empty");

	const capacity = 10;

	const handleIncreaseVolume = () => {
		const newVolume = volume + 1;
		setVolume(newVolume);

		const newVolumeState =
			newVolume === 0
				? "empty"
				: newVolume < capacity
				? "baking"
				: newVolume === capacity
				? "done"
				: "burnt";

		setVolumeState(newVolumeState);
	};

	return (
		<BreadContext.Provider
			value={{ capacity, volume, volumeState, handleIncreaseVolume }}
		>
			{children}
		</BreadContext.Provider>
	);
};

const useBread = () => {
	return useContext(BreadContext);
};

export { BreadProvider, useBread };
