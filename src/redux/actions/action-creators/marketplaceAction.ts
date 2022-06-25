import {
	addOffer_type,
	loadContract_type,
	loadFunds_type,
	loadOffer_type,
	loading_type,
	updateOffer_type,
	loadOfferCount,
} from 'redux/constants/marketplaceConstant';
export const loadMarketplaceContractHandler = (contract: any) => {
	return {
		type: loadContract_type,
		payload: contract,
	};
};
export const loadOfferCountHandler = async (contract: any) => {
	const offerCount = await contract.methods.offerCount().call();
	return {
		type: loadOfferCount,
		payload: offerCount,
	};
};
export const loadOffersHandler = async (contract: any, offerCount: number) => {
	let offers = [];
	for (let i = 0; i < offerCount; i++) {
		const offer = await contract.methods.offers(i + 1).call();
		offers.push(offer);
	}
	offers = offers
		.map((offer) => {
			offer.offerId = parseInt(offer.offerId);
			offer.id = parseInt(offer.id);
			offer.price = parseInt(offer.price);
			return offer;
		})
		.filter((offer) => offer.fulfilled === false && offer.cancelled === false);
	// dispatchMarketplaceAction({type: 'LOADOFFERS', offers: offers});
	return { type: loadOffer_type, payload: offers };
};
export const updateOfferHandler = (offerId: number) => {
	return { type: updateOffer_type, payload: offerId };
};
export const addOfferHandler = (offer: {}) => {
	return { type: addOffer_type, payload: offer };
};
export const loadUserFundsHandler = async (contract: any, account: string) => {
	const userFunds = await contract.methods.userFunds(account).call();
	return { type: loadFunds_type, payload: userFunds };
};
export const setMktIsLoading = (loading: boolean) => {
	return { type: loading_type, payload: loading };
};
