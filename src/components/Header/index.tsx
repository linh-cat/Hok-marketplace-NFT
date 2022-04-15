import React, { useState } from 'react';
import './index.scss';
import ButtonHok from "../ButtonHok"
import ToastHok, { Label, ToastList } from "../ToastHok"
import HokLogo from "../../assets/images/HOK-Logo-white.png"
import { useDispatch, useSelector } from 'react-redux'
import web3 from '../../connection/web3';
import { loadAccount } from '../../redux/actions/action-creators/actionCreators';
import { account } from '../../redux/selector/selector';

const Index = () => {
	const dispatch = useDispatch()
	const accountWeb3 = useSelector(account)
	const [loadingBtn, setLoadingBtn] = useState<boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(false);


	console.log('====================================');
	console.log(isLogin);
	console.log('====================================');
	const connectWalletHandler = async () => {
		let accounts: any
		setLoadingBtn(true)

		try {
			await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
			setLoadingBtn(false);

		} catch (error) {
			console.error(error);
		}
		if (web3) {
			accounts = await web3.eth.getAccounts();
			const account = accounts[0];
			dispatch(loadAccount(account))

		}
	}

	const disconnectWalletHandler = () => {
		try {
			dispatch(loadAccount(''))
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<ToastHok label={Label.SUCCESS} toastList={[{ id: 1, title: "SUCCESS", description: "This is success" }]} position="top-right" show={true} timeShow={3000} />

			<div className="header">
				<div className="header__icon">
					<img src={HokLogo} alt="logo" />
					<ButtonHok type="link" text="Hok Marketplace" bold='bold' color="#fff" />
				</div>
				<ul className="header__nav">
					<li className="header__nav--item">
						<ButtonHok type="link" text="Home" color="#6FA8DC" bold='bold' />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Hok-Main" color="#B4A7D6" bold='bold' />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="Heroes GenX" color="#E06666" bold='bold' />
					</li>
					<li className="header__nav--item">
						<ButtonHok type="link" text="About us" color="#000000" bold='bold'
						/>
					</li>

					{accountWeb3 && <li><ButtonHok type="link" text={accountWeb3?.toString()} /></li>}

					<li className="header__nav--item">
						<ButtonHok
							type="default"
							bold='bold' border='1px solid #000000'
							radius='5px'
							loading={loadingBtn}
							text={accountWeb3 ? "Logout" : "Login"}
							onClick={accountWeb3 ? disconnectWalletHandler : connectWalletHandler}
						/>
					</li>
				</ul>
			</div >
		</>

	);
};

export default Index;
