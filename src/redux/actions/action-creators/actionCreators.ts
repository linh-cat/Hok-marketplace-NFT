import {loadProduct_type, loadCollection_type, updateCollection_type, loadSuplly_type, updateOwner_type} from "../../constants/collectionConstant";
import {account_type, networkId_type} from "../../constants/connectionConstant";
import {addOffer_type, loadContract_type, loadFunds_type, loadOffer_type, loading_type, updateOffer_type, loadOfferCount } from "../../constants/marketplaceConstant"

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

// NFT collection
export const loadCollectionContractHandler = (contract: any) =>{
    return {
        type : loadProduct_type,
        payload : contract
    }
}
export const loadTotalSupplyHandler = async (contract: any) => {
    const totalSupply:number = await contract.methods.totalSupply().call();
    return {
        type: loadSuplly_type,
        payload : totalSupply
    }
}
export const loadCollectionHandler = async (contract: any , totalSupply : number) => {
    let collection: {}[] = [];
    
    for(let i = 0; i < totalSupply; i++) {
      const hash = await contract.methods.tokenURIs(i).call();
      try {
        const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
        if(!response.ok) {
          throw new Error('Something went wrong');
        }

        const metadata = await response.json();
        const owner = await contract.methods.ownerOf(i + 1).call();

        collection = [{
          id: i + 1,
          img: metadata.properties.image.description,
          arms : metadata.properties.arms.description,
          accessories : metadata.properties.accessories.description,
          back : metadata.properties.back.description,
          body : metadata.properties.body.description,
          endo : metadata.properties.endo.description,
          energy : metadata.properties.energy.description,
          deltoid : metadata.properties.deltoid.description,
          owner: owner
        }, ...collection];
        }catch {
          console.error('Something went wrong');
        }
    }
    return {
        type : loadCollection_type,
        payload : collection
    }
}
export const updateCollectionHandler = async (contract: any , id:number , owner:string) => {
    let NFT:{} = {id:Number};
    const hash = await contract.methods.tokenURI(id).call();
    try {
      const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
      if(!response.ok) {
        throw new Error('Something went wrong');      }

      const metadata = await response.json();      

      NFT = {
        id: id,
        img: metadata.properties.image.description,
        arms : metadata.properties.arms.description,
        accessories : metadata.properties.accessories.description,
        back : metadata.properties.back.description,
        body : metadata.properties.body.description,
        endo : metadata.properties.endo.description,
        energy : metadata.properties.energy.description,
        deltoid : metadata.properties.deltoid.description,
        owner: owner
      };
    }catch {
        console.error('Something went wrong');
    }
    return {
        type : updateCollection_type,
        payload : NFT
    }
}
export const updateOwnerHandler = (id: number , newOwner : string) => {
    return({
        type: updateOwner_type,
        payload : { id : id , newOwner : newOwner } 
        })
}
export const setNftIsLoading = (loading : boolean) =>{
    return { 
        type : loading,
        payload : loading
    }
}

//Marketplace 
export const loadMarketplaceContractHandler = (contract :any) => {
    return {
        type: loadContract_type,
        payload : contract
    }
}
export const loadOfferCountHandler = async(contract:any) => {
    const offerCount = await contract.methods.offerCount().call();
    return {
        type : loadOfferCount, 
        payload : offerCount
    }
}
export const loadOffersHandler = async (contract:any , offerCount: number) => {
    let offers = [];
    for(let i = 0; i < offerCount; i++) {
      const offer = await contract.methods.offers(i + 1).call();
      offers.push(offer);
    }
    offers = offers
    .map(offer => {
      offer.offerId = parseInt(offer.offerId);
      offer.id = parseInt(offer.id);
      offer.price = parseInt(offer.price);
      return offer;
    })
    .filter(offer => offer.fulfilled === false && offer.cancelled === false); 
    // dispatchMarketplaceAction({type: 'LOADOFFERS', offers: offers});
    // console.log("total offer NFT:  " , offers) // tong sl nft đã đăng bán
    return({type: loadOffer_type, payload: offers})
}
export const updateOfferHandler = (offerId:number) => {
    return({type: updateOffer_type, payload: offerId}); 
}
export const addOfferHandler = (offer:{}) => {
    return{type: addOffer_type, payload: offer};   
}
export const loadUserFundsHandler = async(contract:any ,account:string) => {
    const userFunds = await contract.methods.userFunds(account).call();
    return({type: loadFunds_type, payload: userFunds});
}
export const setMktIsLoading = (loading:boolean) => {
    return({type: loading_type, payload: loading});
}
