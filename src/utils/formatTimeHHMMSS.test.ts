import { formatTimeHHMMSS } from "./formatTimeHHMMSS";

describe('formatTimeHHMMSS', () => {
	test('formats 0 seconds as "00:00:00"', () => {
		expect(formatTimeHHMMSS(0)).toBe('00:00:00');
	});

	test('formats less than a minute correctly', () => {
		expect(formatTimeHHMMSS(45)).toBe('00:00:45');
	});

	test('formats exactly one minute correctly', () => {
		expect(formatTimeHHMMSS(60)).toBe('00:01:00');
	});

	test('formats minutes and seconds correctly', () => {
		expect(formatTimeHHMMSS(125)).toBe('00:02:05');
	});

	test('formats exactly one hour correctly', () => {
		expect(formatTimeHHMMSS(3600)).toBe('01:00:00');
	});

	test('formats hours, minutes, and seconds correctly', () => {
		expect(formatTimeHHMMSS(3665)).toBe('01:01:05');
	});

	test('formats multiple hours correctly', () => {
		expect(formatTimeHHMMSS(7322)).toBe('02:02:02');
	});

	test('formats a full day correctly', () => {
		expect(formatTimeHHMMSS(86400)).toBe('24:00:00');
	});

	test('formats more than 24 hours correctly', () => {
		expect(formatTimeHHMMSS(90061)).toBe('25:01:01');
	});

	test('handles negative seconds by returning "00:00:00"', () => {
		expect(formatTimeHHMMSS(-5)).toBe('00:00:00');
	});

	test('handles fractional seconds by flooring the value', () => {
		expect(formatTimeHHMMSS(3661.9)).toBe('01:01:01');
	});

	test('handles very large numbers of seconds', () => {
		expect(formatTimeHHMMSS(999999)).toBe('277:46:39');
	});
});
