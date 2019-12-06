import React, { useState, useEffect, useRef } from "react";
import { Row } from "antd";
import TitleCard from "../../../containers/TitleCard/TitleCard";
import { useClientRect, getItemCount, useSliding } from "../../../helper";
import SliderButton from "../SliderButton/SliderButton";
import Header from "../Header/Header";

const Slider = ({ data, title }) => {
	const [count, setCount] = useState(0);
	const [parentSize, parentRef] = useClientRect();
	const [childSize, childRef] = useClientRect();

	useEffect(() => {
		if (parentSize != null && childSize != null) {
			const count = getItemCount(
				parentSize,
				{ height: 0, width: 0 },
				childSize,
				0,
				"width"
			);

			setCount(count);
		}
	}, [parentSize, childSize]);

	const {
		handlePrev,
		handleNext,
		slideProps,
		containerRef,
		hasNext,
		hasPrev
	} = useSliding(childSize, data.length, count, parentSize, childSize);

	return (
		<>
			<Row
				type="flex"
				ref={parentRef}
				style={{
					overflowX: "auto",
					flexWrap: "nowrap",
					overflow: "hidden",
					position: "relative",
					margin: "0.25rem 0"
				}}
			>
				{hasPrev && (
					<SliderButton
						handleClick={handlePrev}
						icon="left"
						style={{ left: 0 }}
					></SliderButton>
				)}
				{hasNext && (
					<SliderButton
						handleClick={handleNext}
						icon="right"
						position="right"
						style={{ right: 0 }}
					></SliderButton>
				)}
				<Row
					type="flex"
					ref={containerRef}
					style={{
						flex: "0 0 auto",
						padding: "0 1.5rem",
						...slideProps,
						transition: "all ease 0.8ms"
					}}
				>
					{data.map((item, index) => (
						<div ref={childRef} key={index} style={{}}>
							<TitleCard data={item}></TitleCard>
						</div>
					))}
				</Row>
			</Row>
		</>
	);
};

export default Slider;
