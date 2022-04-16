import {account_type, networkId_type} from "../../constants/connectionConstant";
export const loadAccount = (account : string) =>{
    return{
        type : account_type,
        payload : account
    }
}
export const loadNetworkId = (networkId : string) =>{
    return {
        type : networkId_type,
        payload : networkId
    }
}