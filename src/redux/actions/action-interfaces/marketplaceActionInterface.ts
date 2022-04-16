interface loadMarketplaceContractHandler {
    type : 'marketplace/loadContract',
    payload : any
}
interface loadOfferCountHandler {
    type : 'marketplace/loadOfferCount',
    payload : number
}
interface loadOffersHandler {
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
export type Action = loadMarketplaceContractHandler | loadOfferCountHandler | loadOffersHandler |
                     updateOfferHandler | addOfferHandler | loadUserFundsHandler | setMktIsLoading