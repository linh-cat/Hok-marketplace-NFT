
import { Action } from './../actions/action-interfaces/filterActionInterface';
import { accessories_type} from '../constants/filterConstant'
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
                Genx : { accessories : action.payload}
            }
        default:
                return state
    }
}

export default filterReducer