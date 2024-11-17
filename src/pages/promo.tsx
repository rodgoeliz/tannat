import React from "react";
import Countdown from "../components/Countdown";
import ProductGrid from "../components/ProductGrid";
import HeaderComponent from "../components/HeaderCountdown";

const Counter = (): JSX.Element => (
	<>
		<HeaderComponent />

		<ProductGrid />
	</>
);

export default Counter;
