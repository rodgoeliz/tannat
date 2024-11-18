import type { GatsbyNode, NodeInput, SourceNodesArgs, graphql } from "gatsby";
import path from "node:path";

//leaving this here to talk about it 
export const createCountryPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
	// 	const { createPage } = actions;

	// 	const countryTemplate = path.resolve("./src/templates/CountryTemplate.tsx");

	// 	const { data } = await graphql<{ allCountry: { edges: { nodes: { name: string, cca3: string }[] } } }>(
	// 		`
	// 		query
	// {  allCountry {
	//   edges{  node {
	//       name
	//       cca3
	//     }}
	//   }}
	// `);


	// 	console.log(data?.allCountry.edges.nodes.slice(0, 2))

	// 	// biome-ignore lint/complexity/noForEach: <explanation>
	// 	data?.allCountry.edges.nodes.slice(0, 2)?.forEach(country => {
	// 		const slug = country.node.fields.slug

	// 		createPage({
	// 			path: `/countries/${country.cca3}`,
	// 			component: countryTemplate,
	// 			context: { country },
	// 		})
	// 	});
};