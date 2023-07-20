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
