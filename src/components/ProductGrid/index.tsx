import { useProducts } from "../../hooks/useProducts";
import React, { useState } from "react";
import * as styles from "./index.module.scss";
import ProductGridItem from "./ProductGridItem";

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

export default ProductGrid;
