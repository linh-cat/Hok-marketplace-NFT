import { useState } from 'react';
import './index.scss';
import ButtonHok from 'components/ButtonHok';
import HokLogo from 'assets/images/HOK-Logo-white.png';
import { useDispatch, useSelector } from 'react-redux';
import web3 from 'connection/web3';
import { loadAccount } from 'redux/actions/action-creators/connectionAction';
import { loadUserFundsHandler } from 'redux/actions/action-creators/marketplaceAction';
import { account, marketplaceContract } from 'redux/selector/selector';
import { useHistory } from 'react-router-dom';

const Index = () => {
	const dispatch = useDispatch();
	const accountWeb3 = useSelector(account);
	const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
	const mktcontract = useSelector(marketplaceContract);
	let history = useHistory();

	const connectWalletHandler = async () => {
		let accounts: any;
		setLoadingBtn(true);

		try {
			await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
			setLoadingBtn(false);
		} catch (error) {
			console.error(error);
		}

		if (web3) {
			accounts = await web3.eth.getAccounts();
			const account = accounts[0];
			console.log('account:', account)
			dispatch(loadAccount(account));
			const loadusersFund = await loadUserFundsHandler(mktcontract, account);
			dispatch(loadusersFund);
		}
	};

	return (
		<>
			<div className="header">
				<div className="header__icon">
					<img src={HokLogo} alt="logo" />
					<ButtonHok
						type="link"
						text="Hok Marketplace"
						bold="bold"
						color="#fff"
						onClick={() => history.push('/')}
					/>
				</div>
				<ul className="header__nav">
					<li className="header__nav--item">
						<ButtonHok type="link" text="Home" color="#6FA8DC" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Hok-Main" color="#B4A7D6" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Heroes GenX" color="#E06666" bold="bold" />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="About us" color="#000000" bold="bold" />
					</li>

					{accountWeb3 ? (
						<li>
							<ButtonHok type="link" text={accountWeb3?.toString()} href={'/mynft'} />
						</li>
					) : (
						<li className="header__nav--item">
							<ButtonHok
								type="default"
								bold="bold"
								border="1px solid #000000"
								radius="5px"
								loading={loadingBtn}
								text={'login'}
								onClick={connectWalletHandler}
							/>
						</li>
					)}
				</ul>
			</div>
		</>
	);
};

export default Index;
