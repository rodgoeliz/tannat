import type { GatsbyNode, NodeInput, SourceNodesArgs } from "gatsby"
import { countrySourceNodes } from "./src/gatsby/countryNodes";
import { createCountryPages } from "./src/gatsby/countryPages";

export const sourceNodes: GatsbyNode["sourceNodes"] = async (source: SourceNodesArgs) => {
    await countrySourceNodes(source);
}

// export const createPages: GatsbyNode["createPages"] = async (args, options, callback) => {
//     await createCountryPages(args, options, callback);
// };