import React, { Fragment } from "react";
import { useBread } from "../../context/BreadContext";

function BreadCrumbs() {
	const {
		boardState: { page, state },
		states,
		goToPage,
	} = useBread();

	return (
		<>
			<div className="row mb-3">
				{Object.values(states).map((stateName, i) => {
					const s = i === page ? { fontWeight: "bold" } : {};
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
								{i <= state && i !== page ? (
									<button onClick={() => goToPage(i)}>
										{stateName}
									</button>
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
