import React from "react";

const AxisLeft = ({ yScale, innerWidth }) => {
	return yScale.ticks().map((tick) => (
		<g className="tick" transform={`translate(0, ${yScale(tick)})`}>
			<line x2={innerWidth} />
			<text key={tick} dy=".32em" x={-10} style={{ textAnchor: "end" }}>
				{tick}
			</text>
		</g>
	));
};

export default AxisLeft;
