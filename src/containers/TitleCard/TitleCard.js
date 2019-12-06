import React from "react";
import { Card, Col, Row, Icon } from "antd";
import styled from "styled-components";
import config from "../../Config/ImageConfig";
import Image from "../../components/Shared/Image/Image";
import Rating from "../../components/Shared/Rating/Rating";

const TitleCard = props => {
	const { Meta } = Card;

	const StyledCard = styled(Card)`
		border-radius: 0.5rem;
		.ant-card-body {
			padding: 12px 6px;
			font-size: 0.75rem;
		}

		.ant-card-meta-title {
			font-size: 0.75rem;
		}

		.now-showing-wrapper {
			display: flex;
			flex-wrap: nowrap;
			overflow-x: auto;
		}

		&& .ant-card-meta-description {
			color: #000000bd;
		}

		.now-showing-wrapper::-webkit-scrollbar {
			display: none;
		}
		.now-showing-content {
			display: flex;
			align-items: center;
			flex: 0 0 auto;
		}
	`;

	return (
		<>
			<StyledCard
				bordered="false"
				style={{
					width: "220px",
					height: "100%",
					margin: "0 0.25rem",
					backfaceVisibility: "hidden",
					WebkitTransformStyle: "preserve-3d"
				}}
				cover={
					<div style={{ width: "100%", height: "125px" }}>
						<Image
							alt={`${props.data.title} Poster`}
							src={
								config.images.base_url +
								config.images.backdrop_sizes[0] +
								props.data.backdrop_path
							}
							title={props.data.title}
							style={{
								objectFit: "cover",
								width: "100%",
								height: "100%"
							}}
						/>
					</div>
				}
			>
				<Meta
					title={props.data.title || props.data.name}
					description={
						<Row type="flex" justify="space-between">
							<Col>
								<Rating>
									{props.data.vote_average
										? props.data.vote_average
										: "Unrated"}
								</Rating>
							</Col>
							<Col>{props.data.release_date}</Col>
						</Row>
					}
				/>
			</StyledCard>
		</>
	);
};

export default TitleCard;
