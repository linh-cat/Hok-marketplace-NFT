import './index.scss';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// component
import ButtonHok from 'components/ButtonHok';

type CardHokProp = {
	id?: number;
	price?: number;
	cardImage?: string;
	name?: string;
	isMyNFT?: boolean;
	isMain?: boolean;
	isCancel?: boolean;
	onClick?: () => void;
	offerPrice?: any;
};

const Index = ({
	id,
	price,
	cardImage,
	name,
	isMyNFT,
	isMain,
	isCancel,
	onClick,
	offerPrice,
}: CardHokProp) => {
	const [priceOffer, setPriceOffer] = useState(0);
	const EnterPrice = (event: any) => {
		setPriceOffer(event.target.value);
		offerPrice(event.target.value);
	};
	const history = useHistory();
	return (
		<div className="cardhok">
			<div className="cardhok__head">
				<img
					src={cardImage}
					alt="cardhok_image"
					onClick={() => history.push(`/description/${id}`)}
				/>
			</div>
			<div className="cardhok__body">
				<div className="cardhok__body--content">
					<div className="name">
						<p>{name}</p>
						<p>#{id}</p>
					</div>
					<div className="price">
						<p>Price</p>
						<p style={{ color: '#009E0F' }}>{price} Hok</p>
						{/* <p>(~75,24 USD)</p> */}
					</div>
				</div>
				{isMain === true && (
					<div className="cardhok__body--button">
						<ButtonHok type="link" text="Buy now" color="#009E0F" bold="bold" onClick={onClick} />
					</div>
				)}
				{isMyNFT === true && (
					<div className="cardhok__body--button">
						{isCancel === true && (
							<ButtonHok type="link" text="Cancel" color="#E06666" bold="bold" onClick={onClick} />
						)}
						{isCancel === false && (
							<form>
								<input
									type="number"
									className="offer__input"
									placeholder="Offer price"
									value={priceOffer}
									onChange={EnterPrice}
								/>
								<ButtonHok
									type="link"
									text="Offer"
									color="#009E0F"
									bold="bold"
									className="offer__btn"
									onClick={onClick}
								/>
							</form>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Index;
