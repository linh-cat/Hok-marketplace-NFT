/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import './index.scss';

// ant design
import { Row, Col, Layout } from 'antd';

// component
import ButtonHok from 'components/ButtonHok';
import CardHok from 'components/CardHok';
import { useHistory } from 'react-router-dom';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
	account,
	marketplaceContract,
	collectionGenx,
	pageGenx,
	offer,
} from '../../redux/selector/selector';
import { loadPaginate } from 'redux/actions/action-creators/filterAction';
import { toast } from 'react-toastify';
// import { formatPrice } from '../../connection/formatPrice';
const { Sider, Content } = Layout;

const index = () => {
	const DECIMALS = 10 ** 18;

	const ether = (wei: any) => wei / DECIMALS;

	const formatPrice = (price: any) => {
		const precision = 100; // Use 2 decimal places
		price = ether(price);
		price = Math.round(price * precision) / precision;
		return price;
	};
	const history = useHistory();

	const [seearchValue, setSearchValue] = useState('');
	const [sort, setSort] = useState('');
	const [reload, setReload] = useState('');
	const [loadingBtn, setLoadingBtn] = useState(false);
	const dispatch = useDispatch();
	const Collection = useSelector(collectionGenx);
	const Account = useSelector(account);
	const MarketContract = useSelector(marketplaceContract);
	const Page = useSelector(pageGenx);
	const CollectionOffers = useSelector(collectionGenx);
	const Offers: {
		offerId?: number;
		id?: number;
		user?: string;
		price?: number;
		fulfilled?: boolean;
		cancelled?: boolean;
	}[] = useSelector(offer);

	const buyHandler = (index: any) => {
		const buyIndex = parseInt(index);

		MarketContract.methods
			.fillOffer(Offers[buyIndex].offerId)
			.send({ from: Account, value: Offers[buyIndex].price })
			.on('transactionHash', (hash: any) => {
				toast.success('🦄 Buy successfully!', {
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.on('error', (error: any) => {
				toast.warn('🦄 Something went wrong when pushing to the blockchain', {
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
		<div className="main__content">
			<Layout>
				<Sider>
					<Filter />
				</Sider>
				<Content>
					<div className="search">
						<ul className="search_menu">
							<li className="search_menu--item"></li>
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
					</div>
					{CollectionOffers.length} Items
					{CollectionOffers.length === 0 && <div>No collections...</div>}
					<Row gutter={[16, 16]}>
						{CollectionOffers.map((NFT: any, key: any) => {
							const index = Offers ? Offers.findIndex((offer) => offer.id === NFT.id) : -1;

							return (
								<>
									{NFT.owner !== Account ? (
										<Col span={4} key={NFT.id}>
											<CardHok
												name="Genx"
												key={key}
												id={NFT.id}
												cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`}
												isMain={true}
												path={'/description'}
												onClick={() => {
													buyHandler(index);
												}}
												price={formatPrice(NFT.price).toFixed(2)}
											/>
										</Col>
									) : (
										<p></p>
									)}
								</>
							);
						})}
					</Row>
				</Content>
			</Layout>
		</div>
	);
};

export default index;
