import React, { useEffect, useRef, useState } from "react";
import * as styles from "./index.module.scss";
import Countdown from "../Countdown";

const Bucket = ({ batchSize, onBatchFull, ...rest }) => {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		const batchFull = count % batchSize === 0 && count > 1;
		setCount(count + 1);
		if (batchFull) {
			onBatchFull(batchSize);
		}
	};

	return (
		<button
			type="button"
			onClick={updateCount}
			className={styles.button}
			{...rest}
		>
			{count} glasses poured
		</button>
	);
};

// Guessing this is the only component i can change
const ThreeButtons = (): JSX.Element => {
	const [batchCount, setBatchCount] = useState(0);
	const [timeIsUp, setTimeIsUp] = useState(false);

	const [clicked, setClicked] = useState(false);

	const handleFullBatch = () => {
		setBatchCount(batchCount + 1);
	};

	return (
		<>
			{timeIsUp && <h1>Total {batchCount}</h1>}

			{!timeIsUp && clicked && (
				<Countdown seconds={5} label="" onFinish={() => setTimeIsUp(true)} />
			)}
			<div
				onClick={() => {
					setClicked(true);
				}}
				onKeyUp={() => {
					setClicked(true);
				}}
			>
				<Bucket
					onBatchFull={handleFullBatch}
					batchSize={3}
					disabled={timeIsUp}
				/>
			</div>
		</>
	);
};

export default ThreeButtons;
