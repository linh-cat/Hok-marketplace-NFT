export const loadAccount = (account : string) =>{
    return{
        type :'connection/account',
        payload : account
    }
}