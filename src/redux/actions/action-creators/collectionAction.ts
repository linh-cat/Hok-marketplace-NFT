import {loadProduct_type, loadCollection_type, updateCollection_type, loadSuplly_type, updateOwner_type} from "../../constants/collectionConstant";
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
    let collection: {id : number, type:string , img :string , 
      arms : string ,accessories:string ,  back:string,body:string,brain:string ,endo:string,
      energy:string ,  deltoid:string ,owner:string }[] = [];
    
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
          type : metadata.properties.type.description,
          img: metadata.properties.image.description,
          arms : metadata.properties.arms.description,
          accessories : metadata.properties.accessories.description,
          back : metadata.properties.back.description,
          body : metadata.properties.body.description,
          brain : metadata.properties.brain.description,
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
    let NFT:{} = {};
    const hash = await contract.methods.tokenURI(id).call();
    try {
      const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
      if(!response.ok) {
        throw new Error('Something went wrong');      }

      const metadata = await response.json();      

      NFT = {
        id: id,
        type : metadata.properties.type.description,
        img: metadata.properties.image.description,
        arms : metadata.properties.arms.description,
        accessories : metadata.properties.accessories.description,
        back : metadata.properties.back.description,
        body : metadata.properties.body.description,
        brain : metadata.properties.brain.description,
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
