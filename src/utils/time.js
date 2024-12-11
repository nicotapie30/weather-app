export const getTime = () => {
	const date = new Date();

	const hoursMinutes = {
		hour: date.getHours(),
		minutes:
			date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
	};

	return { hoursMinutes };
};
