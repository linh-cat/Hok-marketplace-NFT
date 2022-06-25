import React , {useState}from 'react'
import "./index.scss"

import CardHok from "../../../components/CardHok"
import { Row, Col } from 'antd';
import CardImage from "../../../assets/images/cardimage.png"
import web3 from '../../../connection/web3';
import { useDispatch , useSelector } from 'react-redux';
import { collection,
         account,
         collectionContract ,
        marketplaceContract,
        offer,
        myCollection ,myOffered} from '../../../redux/selector/selector';
import { formatPrice } from '../../../connection/formatPrice';
import { toast } from "react-toastify"
const Index = () => {
    const [reload, setReload] = useState({})
    const [OFFERPRICE , SETOFFERPRICE] =useState()
    const Account = useSelector(account) 
    const CollectionContract = useSelector(collectionContract)
    const MarketContract = useSelector(marketplaceContract)
    const MyCollection = useSelector(myCollection)
    console.log('MyCollection:', MyCollection)
    const MyOffered = useSelector(myOffered)
    console.log('MyOffered:', MyOffered)
    const Offers: {
		offerId?: number;
		id?: number;
		user?: string;
		price?: number;
		fulfilled?: boolean;
		cancelled?: boolean;
	}[] = useSelector(offer)
    const Collection = useSelector(collection)
    const makeOfferHandler = async( id: any, key: any , price:any) => {
        try {
            if (!web3) {
                return
            }
            const enteredPrice = web3.utils.toWei(price, 'ether');
            console.log("enteredPrice: ", enteredPrice)
            console.log('id:', id)
            console.log('Account:', Account)
            console.log('MarketContract.options.address:', MarketContract.options.address)
            await CollectionContract.methods.approve(MarketContract.options.address, id).send({ from: Account })
                .on('transactionHash', (hash: any) => {
                    toast.success('🦄 offers successfully!', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })
                .on('receipt', (receipt: any) => {
                     MarketContract.methods.makeOffer(id, enteredPrice).send({ from: Account })
                        .on('error', (error: any) => {
                            toast.warn('🦄 Something went wrong when pushing to the blockchain', {
                                position: "top-center",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                });
                        });
                });
        } catch (error) {
            console.log('error: ', error)
        }
    }
    const cancelHandler = async(index :any) => { 
        try {
            if (!web3) {
                return
            }   
            const cancelIndex = parseInt(index);
            await MarketContract.methods.cancelOffer(Offers[cancelIndex].offerId).send({ from: Account })
            .on('transactionHash', (hash:any) => {
                toast.success('🦄 cancel successfully!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                
            })
            .on('error', (error:any) => {
                toast.warn('🦄 Something went wrong when pushing to the blockchain', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            });  
            
        } catch (error) {
            console.log('error:  ', error)
        }
        
        
    };
    const OfferPrice = (index : any) =>{
        console.log(index)
        SETOFFERPRICE(index)
    }
  
    return (
        <div className='your__item'>
            <div className='your__item--title'>Your NFT Item </div>
            <div className='your__item--body'>
                <Row gutter={[16, 16]}>
                    {/* {
                        Collection.map((NFT:any,key)=>{
                            const index = Offers ? Offers.findIndex((offer ) => offer.id === NFT.id) : -1; //turn back indexOfOffers or -1
                            const owner = index === -1 ? NFT.owner : Offers[index].user; //turn back address or -1
                        
                            // console.log('index: ' , index)
                            // console.log('onwer:  ' , owner)
                    
                            // console.log('...........')
                            return(
                                < >
                                    {index!== -1 ? 
                                        owner!==Account ? 
                                        <p></p>
                                        :  
                                            <Col span={4}  key={key} >          
                                                <CardHok 
                                                    name='Genx' 
                                                    id={NFT.id} 
                                                    cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} 
                                                    isMyNFT={true} 
                                                    isCancel={true} 
                                                    onClick={()=>{cancelHandler(index)}}
                                                />
                                            </Col>
                                        :
                                        owner===Account ?
                                            <Col span={4}  key={key} >
                                               <CardHok 
                                                   name='Genx' 
                                                   id={NFT.id} 
                                                   cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} 
                                                   isMyNFT={true} 
                                                   isCancel={false} 
                                                   offerPrice={OfferPrice} 
                                                   onClick={()=>{makeOfferHandler(NFT.id ,key , OFFERPRICE)}}
                                               />
                                           </Col> : <p></p>
                                    }
                                   
                                </>
                            ) 
                        })
                    } */}
                    {
                        MyOffered.map((NFT : any, key)=>{
                            const index = Offers ? Offers.findIndex((offer ) => offer.id === NFT.id) : -1; //turn back indexOfOffers or -1
                            return (
                                <>
                                    <Col span={4}  key={key} >          
                                                <CardHok 
                                                    name='Genx' 
                                                    id={NFT.id} 
                                                    cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} 
                                                    isMyNFT={true} 
                                                    isCancel={true} 
                                                    onClick={()=>{cancelHandler(index)}}
                                                />
                                    </Col>
                                </>
                            )
                        })
                      
                    }
                    {
                        MyCollection.map((NFT: any , key) =>{
                            return (
                                <>
                                    <Col span={4}  key={key} >
                                            <CardHok 
                                                   name='Genx' 
                                                   id={NFT.id} 
                                                   cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} 
                                                   isMyNFT={true} 
                                                   isCancel={false} 
                                                   offerPrice={OfferPrice} 
                                                   onClick={()=>{makeOfferHandler(NFT.id ,key , OFFERPRICE)}}
                                            />
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Index