import * as React from "react";
import { Link, type PageProps, graphql } from "gatsby";

const IndexPage = ({ data }: PageProps<Queries.AllCountriesQuery>) => {
	return (
		<main>
			{data.allCountry.edges.map(({ country }) => (
				<li key={country.cca3}>
					<Link to={country.slug ?? ""}>{country.name}</Link>
				</li>
			))}
		</main>
	);
};

export default IndexPage;

export const query = graphql`
query AllCountries{
  allCountry {
    edges {
     country: node {
        name
        cca3
        slug
      }
    }
  }
}
  `;
