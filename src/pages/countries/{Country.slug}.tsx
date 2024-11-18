import { graphql, type PageProps } from "gatsby";
import React from "react";

export const CountryTemplate = ({
	data: { country },
}: PageProps<{ country: Queries.Country }>) => {
	return (
		<div>
			<h1>{country.name}</h1>
			<div>Took me to much time to learn how this works on gatsby</div>
		</div>
	);
};

export const query = graphql`
  query CountryPage($slug: String!) {
    country(slug: { eq: $slug }) {
      name
      cca3
    }
  }
`;

export default CountryTemplate;
