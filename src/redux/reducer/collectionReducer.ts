import { Action } from './../actions/action-interfaces/collectionActionInterface';
import {loadProduct_type, loadCollection_type, loadSuplly_type, loading_type, updateCollection_type, updateOwner_type} from "../constants/collectionConstant"
interface Iinitstate {
    contract : any , 
    totalSupply : number | null ,
    collection :{
        id?: number;
        type?: string;
        img?: string;
        arms?: string;
        accessories?: string;
        back?: string;
        body?: string;
        brain?: string;
        endo?: string;
        energy?: string;
        deltoid?: string;
        owner?: string;
        //
        vid ? : string ;
        attribute ?: string
    } [],
    nftIsLoading : boolean
}

const initstate = {
    contract: null,
    totalSupply: 0,
    collection: [],
    nftIsLoading: true
}

const collectionReducer = (state:Iinitstate = initstate , action: Action ) => {
    switch ( action.type ) {
        case loadProduct_type:
            return {
                ...state, 
                contract :action.payload
            }
        case loadSuplly_type: 
            return {
                ...state ,
                totalSupply : action.payload
            }
        case loadCollection_type:
            const collectionFromAction = action.payload as {
                id: number;
                type: string;
                img: string;
                arms: string;
                accessories: string;
                back: string;
                body: string;
                brain: string;
                endo: string;
                energy: string;
                deltoid: string;
                owner: string;
                vid  : string ;
                attribute : string
            }[]
            return {
                ...state , 
                collection : collectionFromAction
            }
        case updateCollection_type: 
            {
                const index = state.collection.findIndex((NFT) => NFT.id === parseInt(action.payload.id as any) );
                let collection = [];
                console.log('index in update collection:', index)
                console.log('before collection:', collection =[...state.collection] )
                if(index === -1) {
                    collection = [ ...state.collection, action.payload];
                } else {
                    collection = [...state.collection];
                }    
                console.log('collection in update collection::', collection)
                return {
                    ...state, 
                    collection : collection
                } 
            }
        case updateOwner_type: 
            {
                console.log('updateOwner:', action.payload)
                const index = state.collection.findIndex((NFT) => NFT.id === parseInt(action.payload.id as any) );
                let collection = [...state.collection];
                console.log('index of collection:  ' ,  collection[index].owner)
                collection[index].owner = action.payload.newOwner;
                return { 
                    ...state, 
                    collection : collection
                }
            }
        case loading_type:
            return {
                ...state , 
                nftIsLoading :action.payload
            }
        default:
                return state
    }
}

export default collectionReducer