import { Action } from './../actions/action-interfaces/action-interfaces';
import {
	addOffer_type,
	loadContract_type,
	loadFunds_type,
	loadOffer_type,
	loading_type,
	updateOffer_type,
    loadOfferCount
} from '../constants/marketplaceConstant';
interface Iinitstate {
	contract: any | null;
	offerCount: number | null;
	offers: {
		offerId: number;
		id: number;
		user: string;
		price: number;
		fulfilled: boolean;
		cancelled: boolean;
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
		case loadOffer_type:
			return {
				...state,
				offers: action.payload,
			};
		case updateOffer_type: {
			const OFFERS = state.offers.filter((offer) => offer.offerId !== action.payload);
			return {
				...state,
				offers: OFFERS,
			};
		}
		case addOffer_type: {
			const index = state.offers.findIndex((offer) => offer.offerId === action.payload.offerId);
			let OFFERS = [];

			if (index === -1) {
				OFFERS = [
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
				OFFERS = [...state.offers];
			}
			return {
				...state,
				offers: OFFERS,
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
