import { useProducts } from "../../hooks/useProducts";
import React, { useState } from "react";
import * as styles from "./index.module.scss";

import type { Product } from "../../types/Products";

export const ProductGridItem = ({ product }: { product: Product }) => {
	return (
		<li className={styles.card} key={product.id}>
			<div className={styles.imageWrapper}>
				<img height={200} src={product.images} alt={product.name} />
			</div>
			<div>
				<h3>{product.name}</h3>
				<p>{product.tag_line}</p>
				<p>{product.color}</p>
			</div>
		</li>
	);
};

export default ProductGridItem;
