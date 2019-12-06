import ReactDOM from "react-dom";
import { useState, useCallback, useRef, useEffect } from "react";

const getDOMNode = element => {
	return ReactDOM.findDOMNode(element);
};

const getElementSize = node => {
	return getDOMNode(node).getBoundingClientRect();
};

function useClientRect() {
	const [rect, setRect] = useState(null);
	const ref = useCallback(node => {
		if (node !== null) {
			setRect(getElementSize(node));
		}
	}, []);
	return [rect, ref];
}

function useSliding(childsize, countElements, totalInViewport, parent, child) {
	const containerRef = useRef(null);
	const [parentWidth, setParentWidth] = useState(0);
	const [childWidth, setChildWidth] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);

	const [distance, setDistance] = useState(0);
	const [viewed, setViewed] = useState(totalInViewport);

	useEffect(() => {
		if (parent && child && containerRef.current) {
			const containerWidth = getDOMNode(containerRef.current).clientWidth;
			setParentWidth(parent.width);
			setChildWidth(child.width);

			setContainerWidth(containerWidth);
		}
	}, [child, containerWidth, parent, totalInViewport]);

	const handlePrev = () => {
		setViewed(viewed - totalInViewport);
		const scrollingWidth =
			distance + parentWidth > 0 ? 0 : distance + parentWidth - childWidth;
		setDistance(scrollingWidth);
	};

	const handleNext = () => {
		setViewed(viewed + totalInViewport);
		const maxScrollingWidth = containerWidth - parentWidth;

		const scrollingWidth =
			distance - parentWidth < -maxScrollingWidth
				? -maxScrollingWidth
				: distance - parentWidth + childWidth;

		setDistance(scrollingWidth);
	};

	const slideProps = {
		transform: `translate3d(${distance}px, 0, 0)`
	};

	const hasPrev = distance < 0;
	const hasNext = distance > -(containerWidth - parentWidth);

	return {
		handlePrev,
		handleNext,
		containerRef,
		slideProps,
		hasPrev,
		hasNext,
		viewed
	};
}

function useHover() {
	const [value, setValue] = useState(false);

	const ref = useRef(null);

	const handleMouseOver = () => setValue(true);

	const handleMouseOut = () => setValue(false);

	useEffect(
		() => {
			const node = ref.current;

			if (node) {
				const element = getDOMNode(node);
				console.log("TCL: useHover -> element", element);

				element.addEventListener("mouseover", handleMouseOver);

				element.addEventListener("mouseout", handleMouseOut);

				return () => {
					element.removeEventListener("mouseover", handleMouseOver);

					element.removeEventListener("mouseout", handleMouseOut);
				};
			}
		},

		[] // Recall only if ref changes
	);

	return [ref, value];
}

function getItemCount(parent, child, item, extra, type) {
	if (type === "height") {
		const parentHeight = parent.height;
		//console.log("TCL: getItemCount -> parentHeight", parentHeight);
		const childHeight = child.height;
		//console.log("TCL: getItemCount -> childHeight", childHeight);
		const itemHeight = item.height;
		//console.log("TCL: getItemCount -> itemHeight", itemHeight);
		return Math.floor((parentHeight - childHeight - extra) / itemHeight);
	} else {
		const parentWidth = parent.width;
		//console.log("TCL: getItemCount -> parentWidth", parentWidth);
		const childWidth = child.width;
		//console.log("TCL: getItemCount -> childWidth", childWidth);
		const itemWidth = item.width;
		//console.log("TCL: getItemCount -> itemWidth", itemWidth);
		return Math.floor((parentWidth - childWidth - extra) / itemWidth);
	}
}

export {
	getElementSize,
	getDOMNode,
	useClientRect,
	getItemCount,
	useSliding,
	useHover
};
