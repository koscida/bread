import React, { Fragment } from "react";
import { useBread } from "../../context/BreadContext";

function BreadCrumbs() {
	const {
		boardState: { state },
		states,
		handleSet,
	} = useBread();

	return (
		<>
			<div className="row mb-3">
				{Object.values(states).map((stateName, i) => {
					const s = i === state ? { fontWeight: "bold" } : {};
					return (
						<Fragment key={i}>
							{i > 0 ? (
								<div key={i} className="col">
									&gt;&gt;&gt;
								</div>
							) : (
								<></>
							)}
							<div className="col" style={s}>
								{i < state ? (
									<a
										href="#"
										onClick={() =>
											handleSet("state", state - 1)
										}
									>
										{stateName}
									</a>
								) : (
									stateName
								)}
							</div>
						</Fragment>
					);
				})}
			</div>
		</>
	);
}

export default BreadCrumbs;
