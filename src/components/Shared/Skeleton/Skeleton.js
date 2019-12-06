import React from "react";
import styled from "styled-components";

const StyledSkeleton = styled.div`
	-webkit-animation-duration: 1.8s;
	-moz-animation-duration: 1.8s;
	-o-animation-duration: 1.8s;
	animation-duration: 1.8s;
	-webkit-animation-name: pulsateAnimation;
	-moz-animation-name: pulsateAnimation;
	-o-animation-name: pulsateAnimation;
	animation-name: pulsateAnimation;
	-webkit-animation-iteration-count: infinite;
	-moz-animation-iteration-count: infinite;
	-o-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-timing-function: ease-in-out;
	-moz-animation-timing-function: ease-in-out;
	-o-animation-timing-function: ease-in-out;
	animation-timing-function: ease-in-out;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	height: 100%;
	width: 100%;

	@keyframes pulsateAnimation {
		0% {
			background-color: transparent;
		}
		25% {
			background-color: #333;
		}
		50% {
			background-color: transparent;
		}
		100% {
			background-color: transparent;
		}
	}
`;

const Skeleton = () => {
	return <StyledSkeleton></StyledSkeleton>;
};

export default Skeleton;
