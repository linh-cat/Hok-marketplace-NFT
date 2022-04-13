import { account } from './../../selector/selector';
export const loadAccount = (account : string) =>{
    return{
        type :'connection/account',
        payload : account
    }
}
export const loadNetworkId = (networkId : string) =>{
    return {
        type : 'connection/networkId',
        payload : networkId
    }
}

// NFT collection
export const loadCollectionContractHandler = (contract: any) =>{
    return {
        type : 'collection/loadcontract',
        payload : contract
    }
}
export const loadTotalSupplyHandler = async (contract: any) => {
    const totalSupply:number = await contract.methods.totalSupply().call();
    return {
        type: 'collection/loadSuplly',
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
        type : 'collection/loadCollection',
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
        type : 'collection/updateCollection',
        payload : NFT
    }
}
export const updateOwnerHandler = (id: number , newOwner : string) => {
    return({
        type: 'collection/updateOwner',
        payload : { id : id , newOwner : newOwner } 
        })
}
export const setNftIsLoading = (loading : boolean) =>{
    return { 
        type : 'collection/loading',
        payload : loading
    }
}

//Marketplace 
export const loadMarketplaceContractHandler = (contract :any) => {
    return {
        type: 'marketplace/loadContract' ,
        payload : contract
    }
}
export const loadOfferCountHandler = async(contract:any) => {
    const offerCount = await contract.methods.offerCount().call();
    return {
        type : 'marketplace/loadOfferCount' , 
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
    return({type: 'marketplace/loadOffer', payload: offers})
}
export const updateOfferHandler = (offerId:number) => {
    return({type: 'marketplace/updateOffer', payload: offerId}); 
}
export const addOfferHandler = (offer:{}) => {
    return{type: 'marketplace/addOffer', payload: offer};   
}
export const loadUserFundsHandler = async(contract:any ,account:string) => {
    const userFunds = await contract.methods.userFunds(account).call();
    return({type: 'marketplace/loadFunds', payload: userFunds});
}
export const setMktIsLoading = (loading:boolean) => {
    return({type: 'marketplace/loading', payload: loading});
}
