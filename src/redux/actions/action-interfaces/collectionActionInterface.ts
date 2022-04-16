interface loadCollectionContractHandler {
    type: "collection/loadContract",
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
export type Action = loadCollectionContractHandler | loadTotalSupplyHandler |
                     loadCollectionHandler | updateCollectionHandler | updateOwnerHandler | setNftIsLoading
                    