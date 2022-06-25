import { Action } from 'redux/actions/action-interfaces/marketplaceActionInterface';
import {
	addOffer_type,
	loadContract_type,
	loadFunds_type,
	loadOffer_type,
	loading_type,
	updateOffer_type,
	loadOfferCount,
} from 'redux/constants/marketplaceConstant';
interface Iinitstate {
	contract: any | null;
	offerCount: number | null;
	offers: {
		offerId?: number;
		id?: number;
		user?: string;
		price?: number;
		fulfilled?: boolean;
		cancelled?: boolean;
	}[];
	userFunds: number | null;
	mktIsLoading: boolean;
}
const initstate = {
	contract: null,
	offerCount: null,
	offers: [],
	userFunds: null,
	mktIsLoading: true,
};
const marketplaceReducer = (state: Iinitstate = initstate, action: Action) => {
	switch (action.type) {
		case loadContract_type:
			return {
				...state,
				contract: action.payload,
			};
		case loadOfferCount:
			return {
				...state,
				offerCount: action.payload,
			};
		case loadOffer_type: {
			return {
				...state,
				offers: action.payload,
			};
		}

		case updateOffer_type: {
			let destinationOffers = state.offers.filter(
				(offer) => offer.offerId !== parseInt(action.payload as any)
			);
			return {
				...state,
				offers: destinationOffers,
			};
		}
		case addOffer_type: {
			const index = state.offers.findIndex(
				(offer) => offer.offerId === parseInt(action.payload.offerId as any)
			);
			let destinationOffers = [];
			if (index === -1) {
				destinationOffers = [
					...state.offers,
					{
						offerId: action.payload.offerId,
						id: action.payload.id,
						user: action.payload.user,
						price: action.payload.price,
						fulfilled: false,
						cancelled: false,
					},
				];
			} else {
				destinationOffers = [...state.offers];
			}
			return {
				...state,
				offers: destinationOffers,
			};
		}
		case loadFunds_type:
			return {
				...state,
				userFunds: action.payload,
			};
		case loading_type:
			return {
				...state,
				mktIsLoading: action.payload,
			};
		default:
			return state;
	}
};

export default marketplaceReducer;
