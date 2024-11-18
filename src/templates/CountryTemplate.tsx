import React from "react";

export const CountryTemplate = ({
	pageContext,
}: { pageContext: { country: { name: string; cca3: string } } }) => {
	return (
		<div>
			<h1>{pageContext.country.name}</h1>
		</div>
	);
};

export default CountryTemplate;
