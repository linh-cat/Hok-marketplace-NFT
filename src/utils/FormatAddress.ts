export const formatAddress = (address: string) => {
	let desAddress;
	let start = address.slice(0, 3);
	let end = address.slice(address.length - 3);

	desAddress = start + '...' + end;

	return desAddress;
};
