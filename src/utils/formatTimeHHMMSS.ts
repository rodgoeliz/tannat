/*
 * @param seconds
 * @returns time in format HH:MM:SS
 */
export const formatTimeHHMMSS = (rawSeconds: number): string => {


	const seconds = Math.trunc(rawSeconds)
	if (seconds < 0)
		return "00:00:00"
	const remainingSeconds = seconds % 60;
	const minutes = Math.floor((seconds % 3600) / 60);
	const hours = Math.floor(seconds / 3600);

	const formattedHours = `${hours}`.padStart(2, "0");
	const formattedMinutes = `${minutes}`.padStart(2, "0");
	const formattedSeconds = `${remainingSeconds}`.padStart(2, "0");

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
