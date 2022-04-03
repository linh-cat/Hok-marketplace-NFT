import { Action } from './../actions/action-interfaces/action-interfaces';


interface Iinitstate {
    account: string | null,
    networkId: string | null,
}
const initstate = {
    account: null,
    networkId: null,
}

const connectionReducer = (state:Iinitstate =initstate ,action:Action) => {
    switch(action.type){
        case 'connection/account':
            return {
                ...state ,
                account : action.payload
            }
        case 'connection/networkId':
            return {
                ...state ,
                networkId : action.payload
            }
        default:
            return state
    }

}

export default connectionReducer
