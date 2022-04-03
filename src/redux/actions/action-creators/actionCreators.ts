import { Action } from "../action-interfaces/action-interfaces";

export const loadAccount = (account : string) =>{
    return{
        type :'connection/account',
        payload : account
    }
}