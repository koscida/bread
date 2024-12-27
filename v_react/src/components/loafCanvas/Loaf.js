import React from "react";
import Canvas from "./Canvas";
import { useBread } from "../../context/BreadContext";
import Rect from "./Rect";
import Text from "./Text";
import Circle from "./Circle";
import Shape from "../form/Shape";

function Loaf() {
	const {
		location,
		ambiance,

		bakerStyle,
		bakerExperience,

		loafDensity,
		loafExperience,

		panLining,

		bakingTime,
		ovenTemp,

		eggColor,

		boardState,
	} = useBread();
	const {
		state,
		page,
		editing,

		bakerPronouns,

		loafPronouns,

		panSize,
		panTop,
		panType,

		eggSize,
		eggType,

		sugarAmount,
		eggAmount,
		milkAmount,
		icingAmount,
	} = boardState;

	var i;

	const getColor = (opt) => opt.options[opt.value].color;

	const draw = (size, ctx, frameCount) => {
		const { w, h } = size;
		// clear screen
		ctx.clearRect(0, 0, w, h);

		// Background

		// Location - background color
		Rect(ctx, 0, 0, w, h, {
			fill: getColor(location),
			stroke: "transparent",
		});

		// Ambiance - border color
		Rect(ctx, 3, 3, w - 6, h - 6, {
			stroke: getColor(ambiance),
		});

		// Main Display

		// Egg
		const eggX = w / 2,
			eggY = 25,
			eggRadius = eggSize + 10,
			eggDiam = eggRadius * 2,
			eggOptions = {
				fill: getColor(eggColor),
			};
		switch (eggType) {
			case "Pasteurized":
				Shape(ctx, eggX, eggY, eggRadius, "triangle", eggOptions);
				break;
			case "Cage-Free":
				Rect(
					ctx,
					eggX - eggRadius,
					eggY - eggRadius,
					eggDiam,
					eggDiam,
					eggOptions
				);
				break;
			case "Free Range":
				Shape(ctx, eggX, eggY, eggRadius, "pentagon", eggOptions);
				break;
			case "Organic":
				Shape(ctx, eggX, eggY, eggRadius, "hexagon", eggOptions);
				break;
			case "Conventional":
			default:
				Circle(ctx, eggX, eggY, eggRadius, eggOptions);
				break;
		}

		// Pan
		const panRadius = parseInt(panSize) * 30,
			panStroke = getColor(panLining),
			lineWidth = parseInt(panTop) * 2,
			panX = w / 2,
			panY = h / 2;
		panType === "Normal"
			? Circle(ctx, panX, panY, panRadius, {
					stroke: panStroke,
					lineWidth,
			  })
			: Rect(
					ctx,
					panX - panRadius,
					panY - panRadius,
					panRadius * 2,
					panRadius * 2,
					{
						stroke: panStroke,
						lineWidth,
					}
			  );

		// HUD
		const colorHUD = "#114488";

		const HUDBoxes = (item, hudY, isFromLeft = true) => {
			const max = Object.values(item.options).reduce(
				(m, o) => (o.value > m ? o.value : m),
				Number.MIN_SAFE_INTEGER
			);
			for (i = 0; i < max + 1; i++) {
				const opts =
					i <= item.value ? { fill: colorHUD } : { stroke: colorHUD };
				const hudX = isFromLeft ? i * 6 + 10 : w - (i * 6 + 14);
				Rect(ctx, hudX, hudY, 4, 10, opts);
			}
		};

		// Oven Temp
		HUDBoxes(ovenTemp, 10);

		// Baking Time
		HUDBoxes(bakingTime, 10, false);

		// Pronouns
		const textH = h - 30;
		Text(ctx, bakerPronouns, 10, textH, {
			fill: getColor(bakerStyle),
		});
		Text(ctx, loafPronouns, w - 10, textH, {
			align: "right",
			fill: getColor(loafDensity),
		});

		// Experiences
		HUDBoxes(bakerExperience, h - 20, true);
		HUDBoxes(loafExperience, h - 20, false);

		// Mixing
		// sugarAmount,
		// 		eggAmount,
		// 		milkAmount,
		// 		icingAmount,

		// Egg Amount
		if (eggAmount >= 1) {
			var eX, eY;

			for (i = 0; i < eggAmount; i++) {
				// center
				if (i === 0) {
					eX = panX;
					eY = panY;
				}
				// clockwise
				if (i >= 1 && i <= 3) {
					eY = panY - eggRadius * 2 - 5;
				}
				if (i === 4 || i === 8) {
					eY = panY;
				}
				if (i >= 5 && i <= 7) {
					eY = panY + eggRadius * 2 + 5;
				}

				if (i === 1 || i >= 7) {
					eX = panX - eggRadius * 2 - 5;
				}
				if (i === 2 || i === 6) {
					eX = panX;
				}
				if (i >= 3 && i <= 5) {
					eX = panX + eggRadius * 2 + 5;
				}

				switch (eggType) {
					case "Pasteurized":
						Shape(ctx, eX, eY, eggRadius, "triangle", eggOptions);
						break;
					case "Cage-Free":
						Rect(
							ctx,
							eX - eggRadius,
							eY - eggRadius,
							eggDiam,
							eggDiam,
							eggOptions
						);
						break;
					case "Free Range":
						Shape(ctx, eX, eY, eggRadius, "pentagon", eggOptions);
						break;
					case "Organic":
						Shape(ctx, eX, eY, eggRadius, "hexagon", eggOptions);
						break;
					case "Conventional":
					default:
						Circle(ctx, eX, eY, eggRadius, eggOptions);
						break;
				}
			}
		}

		// Dot
		// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		// ctx.fillStyle = "#000000";
		// ctx.beginPath();
		// ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
		// ctx.fill();
	};

	return (
		<div>
			<Canvas draw={draw} width={"300"} height={"300"} />
		</div>
	);
}

export default Loaf;
