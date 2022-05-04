

import { accessories_type , arms_type , back_type , body_type , brain_type , endo_type , energy_type , deltoid_type} from "../../constants/filterConstant";
export const loadAccessoriesHandler = (accessories: string) => {
    return {
        type : accessories_type,
        payload : accessories
    }
}
export const loadArmsHandler = (arms : string )=> {
    return {
        type : arms_type,
        payload : arms
    }
}
export const loadBackHandler = (back :string) => {
    return {
        type: back_type ,
        payload : back
    }
}
export const loadBodyHandler = (body :string) => {
    return {
        type: body_type ,
        payload : body
    }
}
export const loadBrainHandler = (brain :string) => {
    return {
        type: brain_type ,
        payload : brain
    }
}
export const loadEndoHandler = (endo :string) => {
    return {
        type: endo_type ,
        payload : endo
    }
}
export const loadEnergyHandler = (energy :string) => {
    return {
        type: energy_type ,
        payload : energy
    }
}
export const loadDeltoidHandler = (deltoid :string) => {
    return {
        type: deltoid_type ,
        payload : deltoid
    }
}