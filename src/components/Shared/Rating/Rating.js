import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const Rating = ({ type, children }) => {
	const TextRating = styled.span`
		color: ${props => props.theme.ratingColor};
		font-weight: bold;
	`;

	return (
		<>
			{type !== "text" ? (
				<>
					<Icon
						type="star"
						theme="filled"
						style={{ color: "#ffcc5c", padding: "0 5px" }}
					/>
					{children}
				</>
			) : (
				<TextRating>{children}</TextRating>
			)}
		</>
	);
};

export default Rating;
