import React, { useState } from 'react';
import './index.scss';
import ButtonHok from "../ButtonHok"
import HokLogo from "../../assets/images/HOK-Logo-white.png"
import { useDispatch, useSelector } from 'react-redux'
import web3 from '../../connection/web3';
import { loadAccount } from '../../redux/actions/action-creators/actionCreators';
import { account } from '../../redux/selector/selector';

const Index = () => {
	const dispatch = useDispatch()
	const accountWeb3 = useSelector(account)
	const [loadingBtn, setLoadingBtn] = useState<boolean>(false);

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
			
		} else
			console.log('No account')
		const account = accounts[0];
		// localStorage.setItem("account", account);
		dispatch(loadAccount(account))
	}
	const disconnectWalletHandler = () => {
		try {
			dispatch(loadAccount(''))
		}catch (error) { 
			console.log(error)
		}
	}
	const shortcut = (add:string) => {
		 
		let dots:string = '...'
		var results = add.substring(3,0).concat(dots).concat(add.substring(3,-1))
		return results
	}
	return (
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
			
					{accountWeb3 
						? <li className="header__nav--item"> 
							<h5> Address : {shortcut(accountWeb3)}</h5> 
						<ButtonHok 
							 	type="default" 
							 	bold='bold' border='1px solid #000000' 
							 	radius='5px' 
							 	loading={loadingBtn} 
							 	text="Logout " 
							 	onClick={disconnectWalletHandler} 
						/>
						</li>
						: <li className="header__nav--item"> 
						 <ButtonHok 
							type="default" 
							text="Connect Wallet" 
							bold='bold' border='1px solid #000000' 
							radius='5px' 
							loading={loadingBtn} 
							onClick={connectWalletHandler} 
						/>
						</li>
				
					}
			</ul>
		</div >
	);
};

export default Index;
