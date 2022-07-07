import React, { useState, useEffect } from 'react';
import './index.scss';

import CardHok from 'components/CardHok';
import { Row, Col } from 'antd';
import web3 from '../../../connection/web3';
import { useSelector } from 'react-redux';
import SpinHok from 'components/SpinHok';

import {
	account,
	collectionContract,
	marketplaceContract,
	offer,
	myCollection,
	myOffered,
	
} from '../../../redux/selector/selector';
import { loadUserFundsHandler } from '../../../redux/actions/action-creators/marketplaceAction';
import { toast } from 'react-toastify';
import ButtonHok from '../../../components/ButtonHok';
import { useDispatch } from 'react-redux';
const Index = () => {
	const dispatch = useDispatch();
	const [OFFERPRICE, SETOFFERPRICE] = useState();
	const Account = useSelector(account);
	const CollectionContract = useSelector(collectionContract);
	const MarketContract = useSelector(marketplaceContract);
	const MyCollection = useSelector(myCollection);
	const MyOffered = useSelector(myOffered);
	const Offers: {
		offerId?: number;
		id?: number;
		user?: string;
		price?: number;
		fulfilled?: boolean;
		cancelled?: boolean;
	}[] = useSelector(offer);
	console.log('MyCollection:', MyCollection)
	console.log('MyOffered:', MyOffered)

	const connectWalletHandler = async () => {
		let accounts: any;
		if (web3) {
			accounts = await web3.eth.getAccounts();
			const account = accounts[0];
			console.log('account', account)
			console.log('MarketContract:', MarketContract)
			if (MarketContract) {
				const loadusersFund = await loadUserFundsHandler(MarketContract, account);
				dispatch(loadusersFund);
			}

		}
	};
	useEffect(() => {
		connectWalletHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [web3, MarketContract]);
	const makeOfferHandler = async (id: any, key: any, price: any) => {
		try {
			if (!web3) {
				return;
			}
			const enteredPrice = web3.utils.toWei(price, 'ether');

			await CollectionContract.methods
				.approve(MarketContract.options.address, id)
				.send({ from: Account })
				.on('transactionHash', (hash: any) => {
					toast.success('🦄 offers successfully!', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				})
				.on('receipt', (receipt: any) => {
					MarketContract.methods
						.makeOffer(id, enteredPrice)
						.send({ from: Account })
						.on('error', (error: any) => {
							toast.warn(`${error}, Something went wrong when pushing to the blockchain`, {
								position: 'top-center',
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
			toast.warn(`${error}, Something went wrong when pushing to the blockchain`, {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	const cancelHandler = async (index: any) => {
		try {
			if (!web3) {
				return;
			}
			const cancelIndex = parseInt(index);
			console.log('cancelIndex:', cancelIndex)
			await MarketContract.methods
				.cancelOffer(Offers[cancelIndex].offerId)
				.send({ from: Account })
				.on('transactionHash', (hash: any) => {
					toast.success('🦄 cancel successfully!', {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				})
				.on('error', (error: any) => {
					toast.warn(`${error}, Something went wrong when pushing to the blockchain`, {
						position: 'top-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					setTimeout(() => {
						window.location.reload();
					}, 3000);
				});
		} catch (error) {
			console.log('error:  ', error);
		}
	};
	const OfferPrice = (index: any) => {
		SETOFFERPRICE(index);
	};
	const claimFundsHandler = () => {
		MarketContract.methods
			.claimFunds()
			.send({ from: Account })
			.on('transactionHash', (hash: any) => {})
			.on('error', (error: any) => {
				toast.error(`${error}, Something went wrong when pushing to the blockchain`, {
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	return (
		<div className="your__item">
			<div className="your__item--title">Your NFT Item </div>
			{MyCollection.length > 0 ? (
				<>
					<div className="your__item--body">
						<Row gutter={[16, 16]}>
							{MyOffered.map((NFT: any, key) => {
								
								const index = Offers ? Offers.findIndex((offer) => Number(offer.id)  ===  Number(NFT.id)) : -1; //turn back indexOfOffers or -1
								return (
									<>
										<Col span={4} key={key}>
											<CardHok
												name="Genx"
												id={NFT.id}
												cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`}
												isMyNFT={true}
												isCancel={true}
												onClick={() => {
													cancelHandler(index);
												}}
											/>
										</Col>
									</>
								);
							})}
							{MyCollection.map((NFT: any, key) => {
								return (
									<>
										<Col span={4} key={key}>
											<CardHok
												name="Genx"
												id={NFT.id}
												cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`}
												isMyNFT={true}
												isCancel={false}
												offerPrice={OfferPrice}
												onClick={() => {
													makeOfferHandler(NFT.id, key, OFFERPRICE);
												}}
											/>
										</Col>
									</>
								);
							})}
						</Row>
					</div>
				</>
			) : (
				<div style={{ textAlign: 'center' }}>No your NFT item and loading...</div>
			)}

			<ButtonHok
				type="default"
				text="Claim Funds"
				radius="5px"
				bold="bold"
				onClick={claimFundsHandler}
			/>
		</div>
	);
};

export default Index;
