export const capitaliceFirstName = (search) => {
	if (!search) return search;

	return search
		.split(' ')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ');
};
