import React from "react";
import { PageHeader } from "antd";
import styled from "styled-components";

const StyledPageHeader = styled(PageHeader)`
	&& {
		padding: 0.5rem 1.5rem;
	}
	.ant-page-header-heading-title {
		font-size: 1rem;
		font-weight: 700;
	}
`;

const Header = props => {
	return <StyledPageHeader title={props.title}></StyledPageHeader>;
};

export default Header;
