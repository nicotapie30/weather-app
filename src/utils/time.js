export const getTime = () => {
	const date = new Date();

	const hoursMinutes = {
		hour: date.getHours(),
		minutes: date.getMinutes(),
	};

	return { hoursMinutes };
};
