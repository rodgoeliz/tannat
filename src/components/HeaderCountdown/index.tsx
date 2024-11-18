import React from "react";
import Countdown from "../Countdown";
import * as styles from "./index.module.scss";
import Logo from "../../assets/Logo";
const HeaderComponent = () => {
	return (
		<div className={`${styles.container}`}>
			<header className={`${styles.header}`}>
				<div className={`${styles.left}`}>
					<Logo height={"2rem"} />
				</div>
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
