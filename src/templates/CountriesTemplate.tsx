import { Link } from "gatsby";
import React from "react";

export const CountriesTemplate = ({
	pageContext: { countries },
}: { pageContext: { countries: { name: string; cca3: string }[] } }) => {
	return (
		<div>
			<h1>All Countries</h1>

			<ul>
				{countries.map((country) => {
					return (
						<li key={country.name}>
							<Link to={`/countries/${country.cca3.toLowerCase()}`}>
								{country.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CountriesTemplate;
