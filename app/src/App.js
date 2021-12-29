import React from "react";
import { extent, scaleLinear, format } from "d3";
import { useData } from "./hooks/useData";
import "./App.css";

// Components
import AxisBottom from "./components/AxisBottom";
import AxisLeft from "./components/AxisLeft";
import CircleMark from "./components/CircleMark";

const App = () => {
	const width = 1200;
	const height = 500;
	const margin = { top: 30, right: 30, bottom: 80, left: 250 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;
	const data = useData();

	const xValue = (d) => d.sepal_length;
	const yValue = (d) => d.sepal_width;

	const siFormat = format(".2s");
	const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

	if (!data) {
		return <pre>"Loading"</pre>;
	}

	const xScale = scaleLinear()
		.domain(extent(data, xValue))
		.range([0, innerWidth]);

	const yScale = scaleLinear()
		.domain(extent(data, yValue))
		.range([0, innerHeight]);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<AxisBottom
					xScale={xScale}
					innerHeight={innerHeight}
					tickFormat={xAxisTickFormat}
				/>
				<AxisLeft yScale={yScale} />
				<text
					className="axis-label"
					x={innerWidth / 2}
					y={innerHeight + 70}
					style={{ textAnchor: "middle" }}
				>
					Population
				</text>
				<CircleMark
					data={data}
					xScale={xScale}
					yScale={yScale}
					xValue={xValue}
					yValue={yValue}
					toolTipFormat={xAxisTickFormat}
				/>
			</g>
		</svg>
	);
};

export default App;
