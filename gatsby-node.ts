import type { GatsbyNode, NodeInput, SourceNodesArgs } from "gatsby"
import { countrySourceNodes } from "./src/gatsby/countryNodes";

export const sourceNodes: GatsbyNode["sourceNodes"] = async (source: SourceNodesArgs) => {
    await countrySourceNodes(source);
}
