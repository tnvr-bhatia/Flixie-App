import { Collapse } from "antd";
import styled from "styled-components";

const { Panel } = Collapse;

const StyledPanel = styled(Panel)`
	.ant-collapse-header {
		text-transform: ${props =>
			props["textTransform"] ? props["textTransform"] : "none"};
		font-weight: bold;
	}
	background-color: ${props =>
		props["backgroundColor"] ? props["backgroundColor"] : "transparent"};
	border-radius: 0;
`;

const StyledCollapse = styled(Collapse)`
	&& {
		font-size: 0.7rem;
		background-color: transparent;
	}

	&& .ant-collapse-item-active {
		background-color: ${props => props.theme.secondaryTextColor};
	}

	&& .ant-collapse-item {
		border-bottom: 0;
		border-radius: 1rem;
	}

	&& .ant-collapse-item:first-child {
		border-radius: 1rem;
	}

	&& .ant-collapse-item:last-child {
		border-radius: 1rem;
	}

	.ant-collapse-content > .ant-collapse-content-box {
		padding: 0;
	}
	&&& .ant-collapse-header {
		color: white;
	}
`;

export { StyledCollapse as Collapse, StyledPanel as Panel };
