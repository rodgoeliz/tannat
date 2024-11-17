import React, { useEffect, useState } from "react";
import * as styles from "./index.module.scss";
import { formatTimeHHMMSS } from "../../utils/formatTimeHHMMSS";

export const Countdown = ({
	seconds,
	label = "Reserving your wines for",
	loop = false,
	customClass = "",
	onFinish = () => {},
}: {
	seconds: number;
	label?: string;
	loop?: boolean;
	customClass?: string;
	onFinish?: () => void;
}) => {
	const [timerSeconds, setTimerSeconds] = useState(seconds);
	const counter = formatTimeHHMMSS(timerSeconds);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimerSeconds((prevSeconds) => {
				const end = loop ? seconds : 0;
				const remaining = prevSeconds > 0 ? prevSeconds - 1 : end;
				return remaining;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [loop, seconds]);

	useEffect(() => {
		if (timerSeconds === 0) {
			onFinish();
		}
	}, [timerSeconds, onFinish]);

	return (
		<div className={`${styles.countdown} ${customClass}`}>
			{label && (
				<div className={`${styles.label} countdown-label`}>{label}</div>
			)}
			<div className={`${styles.counter} countdown-counter`}>{counter}</div>
		</div>
	);
};

export default Countdown;
