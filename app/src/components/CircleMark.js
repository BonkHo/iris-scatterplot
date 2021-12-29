import React from "react";

const CircleMark = ({
	data,
	yScale,
	xScale,
	yValue,
	xValue,
	toolTipFormat,
}) => {
	return data.map((d) => (
		<circle
			className="mark"
			cx={xScale(xValue(d))}
			cy={yScale(yValue(d))}
			r={10}
		>
			<title>{toolTipFormat(xValue(d))}</title>
		</circle>
	));
};

export default CircleMark;
