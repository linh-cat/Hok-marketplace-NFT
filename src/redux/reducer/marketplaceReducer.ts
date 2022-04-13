import { Action } from './../actions/action-interfaces/action-interfaces';
interface Iinitstate {
    contract: any |null,
    offerCount : number | null,
    offers : {offerId : number , id: number , user : string , price: number ,
             fulfilled:boolean , cancelled: boolean}[],
    userFunds : number |null,
    mktIsLoading : boolean
}
const initstate = {
    contract: null,
    offerCount: null,
    offers: [],
    userFunds: null,
    mktIsLoading: true,
}
const marketplaceReducer = (state:Iinitstate = initstate , action:Action ) => {
    switch (action.type) {
        case 'marketplace/loadContract' :
            return {
                ...state ,
                contract : action.payload
            }
        case 'marketplace/loadOfferCount' : 
            return {
                ...state , 
                offerCount : action.payload 
            }
        case 'marketplace/loadOffer' : 
            return {
                ...state , 
                offers : action.payload
            }
        case 'marketplace/updateOffer' : 
            {
                const OFFERS = state.offers.filter(offer => offer.offerId !== action.payload)
                return {
                    ...state , 
                    offers: OFFERS
                }
            }
        case 'marketplace/addOffer' : 
            {
                const index = state.offers.findIndex(offer => offer.offerId === action.payload.offerId);
                let OFFERS = [];
                if(index === -1){
                    OFFERS =
                    [...state.offers, {
                        offerId: action.payload.offerId,
                        id: action.payload.id,
                        user: (action.payload.user),
                        price: action.payload.price,
                        fulfilled: false,
                        cancelled: false
                    }];
                }else {
                    OFFERS = [...state.offers];
                  }
                return{
                    ...state,
                    offers: OFFERS
                }      
            }
        case 'marketplace/loadFunds' : 
            return {
                ...state ,
                userFunds: action.payload
            }
        case 'marketplace/loading' : 
            return {
                ...state , 
                mktIsLoading : action.payload
            }
        default: return state
            
    }
}

export default marketplaceReducer