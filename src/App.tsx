import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import "./App.scss"
import routes from "./routes"
import NFTCollection from './abis/NFTCollection.json'
import NFTMarketplace from './abis/NFTMarketplace.json'
import web3 from './connection/web3';
import {
  loadMarketplaceContractHandler,
  loadOfferCountHandler,
  loadOffersHandler,
  updateOfferHandler,
  addOfferHandler,
  loadUserFundsHandler,
  setMktIsLoading,
} from './redux/actions/action-creators/marketplaceAction';
import { loadAccount, loadNetworkId } from './redux/actions/action-creators/connectionAction'
import {
  loadCollectionContractHandler,
  loadTotalSupplyHandler,
  loadCollectionHandler,
  updateCollectionHandler,
  setNftIsLoading,
  updateOwnerHandler
} from './redux/actions/action-creators/collectionAction'
import { useDispatch } from 'react-redux'
import { ToastContainer } from "react-toastify"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // Check if the user has Metamask active
    const loadBlockchainData = async () => {
      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.log(error)
      }
      let networkID: any

      if (web3) {
        //load ID network
        networkID = await web3.eth.net.getId()

        dispatch(loadNetworkId(networkID))

        //load collection Contract
        const nftDeployedNetwork = (NFTCollection as any).networks[networkID];
        const nftContract = nftDeployedNetwork ? new web3.eth.Contract((NFTCollection.abi as any), nftDeployedNetwork.address) : '';

        dispatch(loadCollectionContractHandler(nftContract))

        //load Marketplace Contracts
        const mktDeployedNetwork = (NFTMarketplace as any).networks[networkID];
        const mktcontract = mktDeployedNetwork ? new web3.eth.Contract((NFTMarketplace.abi as any), mktDeployedNetwork.address) : '';

        dispatch(loadMarketplaceContractHandler(mktcontract))

        if (nftContract) {
          //load TotalSupply
          const loadTotalSupply = await loadTotalSupplyHandler(nftContract)

          dispatch(loadTotalSupply)
          //load Collection 
          const totalSupply = loadTotalSupply.payload
          const loadCollection = await loadCollectionHandler(nftContract, totalSupply)
          console.log("loadCollection:  ", loadCollection)
          dispatch(loadCollection)
          dispatch(setNftIsLoading(false))
          nftContract.events.Transfer()
            .on('data', async (event: any) => {
              //update Collection when tranfer
              const updateCollection = await updateCollectionHandler(nftContract, event.returnValues.tokenId, event.returnValues.to)
              console.log("updateCollectionHandler", updateCollection)
              dispatch(updateCollection)
              //set nft is loading
              dispatch(setNftIsLoading(false))
            })
            .on('error', (error: any) => {
              console.log(error);
            });

        } else {
          window.alert('NFTCollection contract not deployed to detected network.')
        }

        if (mktcontract) {
          // load offer count
          const offerCount = await loadOfferCountHandler(mktcontract)
          dispatch(offerCount)
          // load offer 
          const loadOffer = await loadOffersHandler(mktcontract, offerCount.payload)
          dispatch(loadOffer)

          // Event OfferFilled subscription , khi click mua nft se doi owner moi
          mktcontract.events.OfferFilled()
            .on('data', (event: any) => {
              setMktIsLoading(false);
              dispatch(updateOfferHandler(event.returnValues.offerId))
              dispatch(updateOwnerHandler(event.returnValues.id, event.returnValues.newOwner))
              dispatch(setMktIsLoading(false))
            })
            .on('error', (error: any) => {
              console.log(error);
            });

          // Event Offer subscription  , su kien dang ban NFT
          mktcontract.events.Offer()
            .on('data', (event: any) => {
              dispatch(addOfferHandler(event.returnValues))
              console.log('event:  ', event.returnValues)
              dispatch(setMktIsLoading(false))
            })
            .on('error', (error: any) => {
              console.log(error);
            });

          // Event offerCancelled subscription 
          mktcontract.events.OfferCancelled()
            .on('data', (event: any) => {
              dispatch(updateOfferHandler(event.returnValues.offerId))
              dispatch(updateOwnerHandler(event.returnValues.id, event.returnValues.owner))
              dispatch(setMktIsLoading(false))
            })
            .on('error', (error: any) => {
              console.log(error);
            });

        } else {
          // window.alert('NFTCollection contract not deployed to detected network.')
        }

        // Metamask Event Subscription - Account changed
        (window as any).ethereum.on('accountsChanged', (accounts: string) => {
          if (web3) {
            dispatch(loadAccount(accounts[0]))
            accounts[0] && dispatch(loadUserFundsHandler(mktcontract, accounts[0]))
          }
        });
        // Metamask Event Subscription - Network changed
        (window as any).ethereum.on('chainChanged', (chainId: string) => {
          window.location.reload();
        });
      } else
        console.log('No account')
    }

    loadBlockchainData()
  }, [dispatch])

  function RouteWithSubRoutes(route: any) {
    return (
      <Route path={route.path} exact={route.exact}>
        <route.component routes={route.routes} />
      </Route>
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <ToastContainer />
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map((route) => (
            <RouteWithSubRoutes {...route} key={route.path} />
          ))}
        </Suspense>
      </div>
    </BrowserRouter>

  );
}


export default App;
