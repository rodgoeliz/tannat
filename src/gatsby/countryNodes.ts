import type { NodeInput, SourceNodesArgs } from "gatsby";

export const API_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
	const countries = (await fetch(`${API_URL}/all`).then((res) =>
		res.json(),
	)) as Array<Country>;
	return countries;
};

type Country = {
	cca3: string;
	name: { official: string };
};

export const countrySourceNodes = async ({
	actions,
	createNodeId,
	createContentDigest,
}: SourceNodesArgs) => {
	const { createNode } = actions;

	const data = await getCountries();

	for (const country of data) {
		const countrySmall = { name: country.name.official, cca3: country.cca3, slug: country.cca3.toLowerCase() }
		const node = {
			...countrySmall,
			id: createNodeId(`country-${countrySmall.cca3}`),
			internal: {
				type: "Country",
				mediaType: "application/json",
				content: JSON.stringify(countrySmall),
				contentDigest: createContentDigest(countrySmall),
			},
		} satisfies NodeInput;


		createNode(node);
	}

};
