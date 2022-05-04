
import { State } from './../reducer/index';
import { createSelector } from "reselect";
export const account = (state:State) =>state.connection.account
export const collectionContract = (state:State) =>state.collection.contract
export const collection = (state : State) => state.collection.collection
export const totalSupply = (state : State) => state.collection.totalSupply
export const marketplaceContract = (state: State ) => state.marketplace.contract
export const offer = (state:State) => state.marketplace.offers
export const offerCount = (state:State) => state.marketplace.offerCount

export const collectionGenx = createSelector (
    collection ,
    (collection) => {
       // eslint-disable-next-line array-callback-return
       return collection.filter((nft:any) => {
            if(nft.type === 'Genx')
            return nft  
        })
    }
)
