import React, { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

const Image = ({ alt, title, src, style }) => {
	const [isLoading, setIsLoading] = useState(true);
	const onLoad = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? <Skeleton></Skeleton> : null}
			<img
				alt={alt}
				title={title}
				src={src}
				style={isLoading ? { display: "none" } : { ...style }}
				onLoad={onLoad}
			/>
		</>
	);
};
export default Image;
