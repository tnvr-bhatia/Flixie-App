import React from "react";
import styled from "styled-components";
import TitleCard from "../../../containers/TitleCard/TitleCard";
import { Col } from "antd";

const Slider = styled.div`
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const TouchSlider = ({ data, children }) => {
	return (
		<>
			<Slider>
				{data.map((item, index) => (
					<Col style={{ flex: "0 0 auto" }}>
						<TitleCard data={item}></TitleCard>
					</Col>
				))}
			</Slider>
		</>
	);
};

export default TouchSlider;
