import React from "react";
import { Card as BaseCard } from "antd";
import styled from "styled-components";

const StyledCard = styled(BaseCard)`
	&& {
		background-color: ${props => props.theme.secondaryColor};
		border-radius: 1.5rem;
		height: 100%;
		overflow: hidden;
	}

	&& .ant-card-body {
		padding: 0.5rem;
		color: ${props => props.theme.textColor};
	}

	&& .ant-card-meta-description {
		color: ${props => props.theme.textColor};
	}
`;

class Card extends React.Component {
	render() {
		return <StyledCard>{this.props.children}</StyledCard>;
	}
}

export { Card };
