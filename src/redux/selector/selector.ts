import { State } from './../reducer/index';
export const account = (state:State) =>state.connection.account
export const collectionContract = (state:State) =>state.collection.contract
export const collection = (state : State) => state.collection.collection

export const marketplaceContract = (state: State ) => state.marketplace.contract