import React from 'react';
import './index.scss';

const index = () => {
	return (
		<div className="header">
			<div className="header__icon">
				icon
			</div>
			<ul className="header__nav">
				<li className="header__nav--item">
					Home
				</li>
				<li className="header__nav--item">
					Hok-Main
				</li>
				<li className="header__nav--item">
					Heroes GenX
				</li>
				<li className="header__nav--item">
					About us
				</li>
			</ul>
		</div>
	);
};

export default index;
