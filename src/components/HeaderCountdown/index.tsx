import React from "react";
import Countdown from "../Countdown";
import * as styles from "./index.module.scss";

const HeaderComponent = () => {
	return (
		<header className={`${styles.header}`}>
			<div className={`${styles.left}`}>FirstLeaf</div>
			<div className={`${styles.right}`}>
				<Countdown customClass={styles.customCountdown} seconds={0} />
				<button type="button" className={`${styles.button}`}>
					Checkout
				</button>
			</div>
		</header>
	);
};

export default HeaderComponent;
