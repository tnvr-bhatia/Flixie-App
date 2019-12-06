import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import styled from "styled-components";
import CountrySelect from "../../CountrySelect/CountrySelect";

const Logo = styled.div`
	width: 120px;
	height: 31px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px 24px 16px 0;
	float: left;
`;
const NavBar = ({ data, defaultValue, onChange, placeholder, style }) => {
	const { Header } = Layout;

	return (
		<Header className="header" style={{ height: "auto", padding: "0 16px" }}>
			<Row type="flex">
				<Col xs={24} sm={24} md={18} lg={20} xl={20}>
					<Col xs={24} sm={24} md={6} lg={6} xl={6}>
						<Logo></Logo>
					</Col>
					<Col
						xs={24}
						sm={24}
						md={0}
						lg={0}
						xl={0}
						style={{
							position: "fixed",
							bottom: 0,
							left: 0,
							zIndex: 4,
							width: "100%"
						}}
					>
						<Menu
							theme="dark"
							mode="horizontal"
							selectedKeys={"1"}
							style={{
								lineHeight: "64px",
								display: "flex",
								justifyContent: "space-between"
							}}
						>
							<Menu.Item key="1">Home</Menu.Item>
							<Menu.Item key="2" disabled>
								Discover
							</Menu.Item>
							<Menu.Item key="3" disabled>
								Movies
							</Menu.Item>
							<Menu.Item key="4" disabled>
								Tv
							</Menu.Item>
							<Menu.Item key="5" disabled>
								People
							</Menu.Item>
						</Menu>
					</Col>
					<Col xs={0} sm={0} md={18} lg={18} xl={18}>
						<Menu
							theme="dark"
							mode="horizontal"
							selectedKeys={"1"}
							style={{ lineHeight: "64px" }}
						>
							<Menu.Item key="1">Home</Menu.Item>
							<Menu.Item key="2" disabled>
								Discover
							</Menu.Item>
							<Menu.Item key="3" disabled>
								Movies
							</Menu.Item>
							<Menu.Item key="4" disabled>
								Tv
							</Menu.Item>
							<Menu.Item key="5" disabled>
								People
							</Menu.Item>
						</Menu>
					</Col>
				</Col>
				<Col xs={24} sm={24} md={6} lg={4} xl={4}>
					<CountrySelect
						data={data}
						placeholder={placeholder}
						style={style}
						defaultValue={defaultValue}
						onChange={onChange}
					></CountrySelect>
				</Col>
			</Row>
		</Header>
	);
};

export default NavBar;
