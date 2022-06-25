/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './index.scss';

// ant design
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

// component
import ButtonHok from 'components/ButtonHok';
import CardHok from 'components/CardHok';

//
import { useDispatch, useSelector } from 'react-redux';
import { account, 
    collection,
    collectionContract, 
    marketplaceContract, 
    collectionGenx, 
    pageGenx,
    offer ,
    collectionOffers } from '../../redux/selector/selector';
import { loadPaginate } from 'redux/actions/action-creators/filterAction';
import web3 from 'connection/web3';
import { toast } from "react-toastify"
import { formatPrice } from '../../connection/formatPrice';
const index = () => {
	const [seearchValue, setSearchValue] = useState("")
    const [sort, setSort] = useState('')
    const [reload, setReload] = useState('')
    const [loadingBtn, setLoadingBtn] = useState(false)
    const dispatch = useDispatch()
    const Collection = useSelector(collectionGenx)
    const Account = useSelector(account)
    const CollectionContract = useSelector(collectionContract)
    const MarketContract = useSelector(marketplaceContract)
    const Page = useSelector(pageGenx)
    const CollectionOffers = useSelector(collectionOffers)
    console.log('collection: ', CollectionOffers)
    const Offers: {
		offerId?: number;
		id?: number;
		user?: string;
		price?: number;
		fulfilled?: boolean;
		cancelled?: boolean;
	}[] = useSelector(offer)

	const ChangeSortHandler = () => {
		// console.log('xxx')
		// setSort(value)
		// dispatch(loadSortHandler(value))
	};
	const seeMoreHandler = () => {
		setTimeout(() => {
			dispatch(loadPaginate(1));
			setLoadingBtn(false);
		}, 1000);
		setLoadingBtn(true);
	};
	const buyHandler = ( index : any) => {    
        const buyIndex = parseInt(index);   
        
        MarketContract.methods.fillOffer(Offers[buyIndex].offerId).send({ from:Account, value: Offers[buyIndex].price })
        .on('transactionHash', (hash : any) => {
            toast.success('🦄 Buy successfully!', {
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
                    
          };

    const commonModal: {
            title: string,
            modalText: string,
            btnOk: string,
            btnCancel: string,
            handleOk: () => void,
            handleCancel: () => void
        } = {
            title: "Confirm",
            modalText: "this is modal",
            btnOk: "OK",
            btnCancel: "Cancel",
            handleCancel: () => {
            },
            handleOk: () => { }
        }
        const [modalVisible, setModalVisible] = useState<{ visible: boolean, modal: any }>({
            visible: false,
            modal: commonModal
        })

	return (
		<div className="main__content">
			<div className="search">
				<ul className="search_menu">
					<li className="search_menu--item">
						<ButtonHok
							type="default"
							text="Newest"
							backgroundColor="#999999"
							color="#fff"
							radius="5px"
							bold="bold"
							onClick={ChangeSortHandler}
						/>
					</li>
					<li className="search_menu--item">
						<ButtonHok type="default" text="Oldest" radius="5px" bold="bold" />
					</li>
					<li className="search_menu--item">
						<ButtonHok type="default" text="Lowest price" radius="5px" bold="bold" />
					</li>
					<li className="search_menu--item">
						<ButtonHok type="default" text="Highest price" radius="5px" bold="bold" />
					</li>
				</ul>

				<div className="search__form">
					<div className="search__form--label">Type your keyword</div>
					<div className="search__form--input">
						<SearchOutlined />
						<input onChange={(e) => setSearchValue(e.target.value)} />
					</div>
				</div>
			</div>
			{Collection.length} Items
            <Row gutter={[16, 16]}>
                {CollectionOffers
                    .slice(0, Page)
                    .map((NFT: any, key:any) => {  
                        const index = Offers ? Offers.findIndex((offer ) => offer.id === NFT.id) : -1;
                           
                        return (
                            <>
                            {
                                NFT.owner !== Account ?
                                <Col span={4}  key={NFT.id} >          
                                        <CardHok 
                                            name='Genx' 
                                            id={NFT.id} 
                                            cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} 
                                            isMain={true} 
                                            onClick={()=>{buyHandler(index)}}
                                            price= {formatPrice(NFT.price).toFixed(2)}
                                        />
                                </Col> : <p></p>
                               
                            }
                        
                            </>
                          )
                        })}
                </Row>
			<ButtonHok
				loading={loadingBtn}
				type="default"
				text="See more"
				radius="5px"
				bold="bold"
				onClick={seeMoreHandler}
			/>
		</div>
	);
};

export default index;
