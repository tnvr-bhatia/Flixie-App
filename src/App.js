import React, { useEffect, useState } from "react";
import MovieWidget from "./containers/MoviesWidget/MovieWidget";
import { Layout, Col, Row } from "antd";
import { ThemeProvider } from "styled-components";
import { getPopularTv, getPopularMovies, getCountries } from "./Api";
import Header from "./components/Shared/Header/Header";
import { Skeleton } from "antd";
import TouchSlider from "./components/Shared/Slider/TouchSlider";
import NavBar from "./components/Shared/NavBar/NavBar";

const App = () => {
	const { Content } = Layout;

	const theme = {
		primaryColor: "#F8A901",
		secondaryColor: "#0D090A",
		textColor: "#fafafa",
		ratingColor: "#DBA442",
		secondaryTextColor: "#252525"
	};

	const [popular, setPopular] = useState({ Movies: [], Tv: [] });
	const [country, setCountry] = useState([]);
	const [defaultCountry, setDefaultCountry] = useState("US");
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		const popularMovies = getPopularMovies(defaultCountry);
		const popularTv = getPopularTv();
		const country = getCountries();

		Promise.all([popularMovies, popularTv, country]).then(
			([popularMovieResponse, popularTvResponse, countryResponse]) => {
				setPopular({
					Movies: popularMovieResponse.data.results,
					Tv: popularTvResponse.data.results
				});

				setCountry(countryResponse.data);

				setIsFetching(false);
			}
		);
	}, [defaultCountry]);

	const handleChange = value => {
		console.log("TCL: App -> value", value);

		setDefaultCountry(value);
	};

	return (
		<ThemeProvider theme={theme}>
			<Layout style={{ background: "#ffffff", height: "100%" }}>
				<NavBar
					data={country}
					placeholder="Select a Country"
					style={{ width: "100%" }}
					defaultValue={defaultCountry}
					onChange={handleChange}
				></NavBar>

				<Content style={{ padding: "16px", margin: "16px 0px" }}>
					<Row style={{ height: "100%" }} type="flex" gutter={[16, 16]}>
						<Col xs={0} sm={0} md={8} lg={6} xl={5}>
							<MovieWidget defaultCountry={defaultCountry}></MovieWidget>
						</Col>
						<Col xs={24} sm={24} md={16} lg={18} xl={19}>
							<Row>
								<Col span={24}>
									<Header title="Movies"></Header>
									{isFetching ? (
										<Skeleton></Skeleton>
									) : (
										<TouchSlider data={popular["Movies"]}></TouchSlider>
									)}
								</Col>

								<Col span={24}>
									<Header title="Tv"></Header>
									{isFetching ? (
										<Skeleton></Skeleton>
									) : (
										<TouchSlider data={popular["Tv"]}></TouchSlider>
									)}
								</Col>
							</Row>
						</Col>
					</Row>
				</Content>
			</Layout>
		</ThemeProvider>
	);
};
export default App;
