/*
 * @param seconds
 * @returns time in format HH:MM:SS
 */
export const formatTimeHHMMSS = (seconds: number): string => {
	const remainingSeconds = seconds % 60;
	const minutes = Math.floor((seconds % 3600) / 60);
	const hours = Math.floor(seconds / 3600);

	const formattedHours = `0${hours}`.slice(-2);
	const formattedMinutes = `0${minutes}`.slice(-2);
	const formattedSeconds = `0${remainingSeconds}`.slice(-2);

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
