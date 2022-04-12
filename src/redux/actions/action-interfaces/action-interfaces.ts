
interface loadAccount {
    type : 'connection/account'
    payload : string
}
interface loadNetworkId{
    type : 'connection/networkId'
    payload : string
}
// NFT collection
interface loadCollectionContractHandler {
    type: 'collection/loadcontract',
    payload : any
}
interface loadTotalSupplyHandler {
    type : 'collection/loadSuplly',
    payload: number
}
interface loadCollectionHandler {
    type: 'collection/loadCollection'
    payload : {}[]
}
interface updateCollectionHandler { 
    type : 'collection/updateCollection',
    payload : {id:number}
}
interface updateOwnerHandler {
    type : 'collection/updateOwner',
    payload : {id:number , newOwner : string}
}
interface setNftIsLoading {
    type : 'collection/loading',
    payload : boolean
}
// NFT marketplace
interface loadMarketplaceContractHandler {
    type : 'marketplace/loadContract',
    payload : any
}
interface loadOfferCountHandler {
    type : 'marketplace/loadOfferCount',
    payload : number
}
interface loadOffersHandler{
    type: 'marketplace/loadOffer',
    payload : {}[]
}
interface updateOfferHandler {
    type : 'marketplace/updateOffer'
    payload : number
}
interface addOfferHandler {
    type : 'marketplace/addOffer',
    payload : {offerId:number ,id:number, user:string , 
        price:number , fulfilled:boolean ,cancelled:boolean }
}
interface loadUserFundsHandler {
    type : 'marketplace/loadFunds',
    payload : number
}
interface setMktIsLoading {
    type : 'marketplace/loading',
    payload : boolean
}

export type Action = loadAccount | loadNetworkId | loadCollectionContractHandler | loadTotalSupplyHandler |
                     loadCollectionHandler | updateCollectionHandler | updateOwnerHandler | setNftIsLoading|
                     loadMarketplaceContractHandler | loadOfferCountHandler | loadOffersHandler |
                     updateOfferHandler | addOfferHandler | loadUserFundsHandler | setMktIsLoading