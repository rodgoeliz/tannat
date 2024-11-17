import React from "react";
import Countdown from "../Countdown";
import * as styles from "./index.module.scss";

const HeaderComponent = () => {
	return (
		<div className={`${styles.container}`}>
			<header className={`${styles.header}`}>
				<div className={`${styles.left}`}>FirstLeaf</div>
				<div className={`${styles.right}`}>
					<Countdown customClass={styles.customCountdown} />
					<button type="button" className={`${styles.button}`}>
						Checkout
					</button>
				</div>
			</header>
		</div>
	);
};

export default HeaderComponent;
