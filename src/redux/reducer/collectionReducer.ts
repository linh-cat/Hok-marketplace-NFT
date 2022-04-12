import { Action } from './../actions/action-interfaces/action-interfaces';
interface Iinitstate {
    contract : any , 
    totalSupply : number | null ,
    collection :{id : number , img :string , 
        arms : string ,accessories:string ,  back:string,body:string ,endo:string,
        energy:string ,  deltoid:string ,owner:string } [] ,
    nftIsLoading : boolean
}

const initstate = {
    contract: null,
    totalSupply: 0,
    collection: [],
    nftIsLoading: true
}

const collectionReducer = (state:Iinitstate = initstate , action:Action ) => {
    switch ( action.type ) {
        case 'collection/loadcontract' :
            return {
                ...state , 
                contract :action.payload
            }
        case 'collection/loadSuplly' : 
            return {
                ...state ,
                totalSupply : action.payload
            }
        case 'collection/loadCollection' :
            return {
                ...state , 
                collection : action.payload
            }
        case 'collection/updateCollection' : 
            {
                const index = state.collection.findIndex((NFT) => NFT.id === action.payload.id);
                let collection = [];
                if(index === -1) {
                    collection = [action.payload, ...state.collection];
                } else {
                    collection = [...state.collection];
                }    
                return {
                    ...state, 
                    collection : collection
                } 
            }
        case 'collection/updateOwner' : 
            {
                const index = state.collection.findIndex((NFT) => NFT.id === action.payload.id);
                let collection = [...state.collection];
                collection[index].owner = action.payload.newOwner;
                return { 
                    ...state, 
                    collection : collection
                }
            }
        case 'collection/loading' :
            return {
                ...state , 
                nftIsLoading :action.payload
            }
        default:
                return state
    }
}

export default collectionReducer