import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const SliderButton = props => {
	const StyledButton = styled(Button)`
		&& {
			position: absolute;
			z-index: 1;
			top: 0;
			bottom: 0;
			height: 100%;
			background-color: #141414b3;
			border-radius: 0;
			color: #ffffffa6;
			font-size: 1.5rem;
			width: 60px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			border: 0;
		}

		&&:hover {
			background-color: #141414b3;
			color: #ffffffa6;
			font-size: 2rem;
		}
	`;

	const { style, icon, handleClick } = props;

	return (
		<StyledButton
			icon={icon}
			onClick={handleClick}
			style={style}
		></StyledButton>
	);
};

export default SliderButton;
