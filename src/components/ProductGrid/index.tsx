import { useProducts } from "../../hooks/useProducts";
import React, { useState } from "react";
import * as styles from "./index.module.scss";

const ProductGrid = () => {
	const [color, setColor] = useState<string | undefined>(undefined);
	const { data } = useProducts({ params: { color } });

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className={`${styles.container}`}>
			<div>
				<input
					value={color}
					onChange={(event) => setColor(event?.target?.value ?? undefined)}
				/>
			</div>

			<ul className={styles.grid}>
				{data.map((product) => (
					<ProductGridItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};
import type { Product } from "../../types/Products";

const ProductGridItem = ({ product }: { product: Product }) => {
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

export default ProductGrid;
