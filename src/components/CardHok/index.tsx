
import React from 'react'
import "./index.scss"

// component
import ButtonHok from "../ButtonHok"

type CardHokProp = {
    id?: number,
    price?: number,
    cardImage?: string,
    name?: string,
    isMyNFT?: boolean,
    isMain?: boolean,
    isCancel?: boolean
}

const index = ({ id, price, cardImage, name, isMyNFT, isMain, isCancel }: CardHokProp) => {

    return (
        <div className="cardhok">
            <div className="cardhok__head">
                <img src={cardImage} alt="cardhok_image" />
            </div>
            <div className="cardhok__body">
                <div className="cardhok__body--content">
                    <div className="name">
                        <p>{name}</p>
                        <p>#{id}</p>
                    </div>
                    <div className="price">
                        <p>Price</p>
                        <p style={{ color: "#009E0F" }}>{price} Hok</p>
                        <p>(~75,24 USD)</p>
                    </div>
                </div>
                {isMain === true && <div className="cardhok__body--button">
                    <ButtonHok type="link" text="Buy now" color="#009E0F" bold="bold" />
                </div>}
                {isMyNFT === true && <div className="cardhok__body--button">
                    {isCancel === true && <ButtonHok type="link" text="Cancel" color="#E06666" bold="bold" />}
                    {isCancel === false && <form>
                        <input type="number" className='offer__input' placeholder='Offer price' />
                        <ButtonHok type="link" text="Offer" color="#009E0F" bold="bold" className='offer__btn' />
                    </form>}
                </div>}

            </div>
        </div>
    )
}

export default index