import React from 'react'
import "./index.scss"

// component
import CardImage from "../../assets/images/cardimage.png"
import ButtonHok from "../ButtonHok"

const index = () => {
    return (
        <div className="cardhok">
            <div className="cardhok__head">
                <img src={CardImage} alt="cardhok_image" />
            </div>
            <div className="cardhok__body">
                <div className="cardhok__body--content">
                    <div className="name">
                        <p>kibba Legs</p>
                        <p>#1234</p>
                    </div>
                    <div className="price">
                        <p>Price</p>
                        <p style={{ color: "#009E0F" }}>0.24 Hok</p>
                        <p>(~75,24 USD)</p>
                    </div>
                </div>
                <div className="cardhok__body--button">
                    <ButtonHok type="link" text="Buy now" color="#009E0F" bold="bold" />
                </div>
            </div>
        </div>
    )
}

export default index