import React, { useContext, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Avatar, Row, Col, Icon, Card } from "antd";
//import { Card } from "../../components/Shared/Card/Card.styled";
import { useSizeElement } from "../../helper";
import SizeContext from "../Context/SizeContext";
import styled from "styled-components";
import Rating from "../../components/Shared/Rating/Rating";

const { Meta } = Card;

const ListCard = props => {
	const StyledListCard = styled(Card)`
		&& {
			height: 55px;
			background-color: transparent;
		}
		&& .ant-card-body {
			padding: 0.5rem 0.75rem;
			border: 0;
		}
		.ant-card-meta {
			font-size: 0.75rem;
		}
	`;

	const { avatar, title, rating } = props;

	return (
		<StyledListCard
			bordered={false}
			border-radius={"0"}
			border-bottom={"1px solid #e8e8e8"}
			//ref={elementRef}
		>
			<Meta
				description={
					<Row
						type="flex"
						style={{
							flexFlow: "row nowrap",
							alignItems: "start"
						}}
					>
						<Col span={20}>
							<Row type="flex" gutter={32}>
								<Col xs={3} sm={6}>
									<Avatar
										shape="square"
										size={40}
										src={avatar}
										alt={`${title} poster`}
									></Avatar>
								</Col>
								<Col
									xs={21}
									sm={18}
									style={{
										whiteSpace: "nowrap"
									}}
								>
									<p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
										{title}
									</p>
								</Col>
							</Row>
						</Col>
						<Col span={4}>
							<Row type="flex" justify="end">
								<Col>
									<Rating type="text">{rating ? rating : "NR"}</Rating>
								</Col>
							</Row>
						</Col>
					</Row>
				}
			></Meta>
		</StyledListCard>
	);
};

export default ListCard;
