import { arms, deltoid, accessories } from './../../components/Filter/List';

import { Action } from './../actions/action-interfaces/filterActionInterface';
import { accessories_type, arms_type , back_type , body_type , brain_type , endo_type , energy_type , deltoid_type} from '../constants/filterConstant'
interface Iinitstate {
    Genx: {
        accessories:string,
        arms:string,
        back:string,
        body:string,
        brain:string,
        endo:string,
        energy:string,
        deltoid:string,
    }
    Main: {
        search: string
    }
    page : number
}
const initState = {
    Genx : {
        accessories: '',
        arms : '',
        back : '',
        body : '',
        brain : '',
        endo : '',
        energy: '',
        deltoid :'',
    },
    Main : {
        search : ''
    },
    page : 1
}
const filterReducer = (state:Iinitstate = initState , action:Action) => {
    switch(action.type) {
        case accessories_type :
            
            return{
                ...state,
                Genx : { ...state.Genx,accessories : action.payload}
            }
        case arms_type :
            return{
                ...state,
                Genx : {...state.Genx , arms : action.payload}
            }  
        case back_type :
            return{
                ...state,
                Genx : {...state.Genx , back : action.payload}
            }  
        case body_type :
            return{
                ...state,
                Genx : {...state.Genx , body : action.payload}
            }
        case brain_type :
            return{
                ...state,
                Genx : {...state.Genx , brain : action.payload}
            }   
        case endo_type :
            return{
                ...state,
                Genx : {...state.Genx , endo : action.payload}
            }
        case energy_type :
            return{
                ...state,
                Genx : {...state.Genx , energy : action.payload}
            } 
        case deltoid_type :
            return{
                ...state,
                Genx : {...state.Genx , deltoid : action.payload}
            }           
        default:
                return state
    }
}

export default filterReducer