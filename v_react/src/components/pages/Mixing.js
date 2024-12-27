import React from "react";
import { useBread } from "../../context/BreadContext";
import Input from "../form/Input";

function Mixing() {
	const { sugarAmount, eggAmount, milkAmount, icingAmount } = useBread();
	return (
		<>
			<div className="section">
				<div className="row">
					<div className="col-2">
						<h5>Baker</h5>
					</div>

					<div className="col-10">
						<div className="inputGrouping">
							<Input data={eggAmount} />
						</div>
						<div className="inputGrouping">
							<Input data={milkAmount} />
						</div>
						<div className="inputGrouping">
							<Input data={sugarAmount} />
							<Input data={icingAmount} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Mixing;
