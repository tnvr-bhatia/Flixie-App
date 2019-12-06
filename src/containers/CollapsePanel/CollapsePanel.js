import React, { useContext } from "react";
import { Icon } from "antd";
import { Collapse, Panel } from "./CollapsePanel.styled";
import { useSizeElement } from "../../helper";
import SizeContext from "../Context/SizeContext";

const CollapsePanel = props => {
	const { accordion, defaultActiveKey, headers } = props;

	return (
		<>
			<Collapse
				accordion={accordion}
				bordered={false}
				expandIconPosition="right"
				defaultActiveKey={defaultActiveKey}
				expandIcon={({ isActive }) => (
					<Icon type="caret-right" rotate={isActive ? 90 : 0} />
				)}
			>
				{headers.map((header, index) => (
					<Panel header={header} key={index}>
						{props.render}
					</Panel>
				))}
			</Collapse>
		</>
	);
};

export default CollapsePanel;
