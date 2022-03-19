import React from 'react';
import './index.scss';
import ButtonHok from "../ButtonHok"

const index = () => {
	return (
		<div className="header">
			<div className="header__icon">
				<ButtonHok type="link" text="Hok Marketplace" bold='bold' danger />
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
					<ButtonHok type="link" text="About us" color="#000000" bold='bold' />
				</li>
				<li className="header__nav--item">
					<ButtonHok type="default" text="Connect Wallet" bold='bold' border='1px solid #000000' radius='5px' />
				</li>
			</ul>
		</div>
	);
};

export default index;
