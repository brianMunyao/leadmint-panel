export const formatCurrency = (number, currencyStr = '$') => {
	const [integerPart, decimalPart = ''] = number.toString().split('.');

	const formattedIntegerPart = integerPart.replace(
		/\B(?=(\d{3})+(?!\d))/g,
		','
	);

	const formattedNumber = decimalPart
		? `${formattedIntegerPart}.${decimalPart}`
		: formattedIntegerPart;

	return currencyStr + formattedNumber;
};

export const getInitials = (name) =>
	name
		.trim()
		.split(' ')
		.map((word) => word[0].toUpperCase())
		.join('');
