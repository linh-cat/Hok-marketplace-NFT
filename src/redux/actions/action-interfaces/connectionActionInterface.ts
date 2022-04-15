interface loadAccount {
    type : 'connection/account'
    payload : string
}
interface loadNetworkId{
    type : 'connection/networkId'
    payload : string
}
export type Action = loadAccount | loadNetworkId 