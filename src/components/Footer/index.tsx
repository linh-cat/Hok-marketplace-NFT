import React from 'react'
import "./index.scss"

// ant design
import { TwitterSquareFilled, FacebookFilled, InstagramFilled, GithubFilled } from "@ant-design/icons"
// component
import ButtonHok from "../ButtonHok"

const index = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__top--left">
                    <div className="title">Stay in the loop</div>
                    <p className="text">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating House of Kibaa.</p>
                    <div className="form-contact">
                        <input type="text" />
                        <ButtonHok type="default" text="Sign up" backgroundColor='#2B78E4' radius='5px' color='#FFFFFF' border='none' />
                    </div>
                </div>
                <div className="footer__top--right">
                    <div className="title">Join the community</div>
                    <div className="icons">
                        <TwitterSquareFilled />
                        <FacebookFilled />
                        <InstagramFilled />
                        <GithubFilled />
                    </div>
                </div>
            </div>
            <div className="footer__bottom"></div>

        </div>
    )
}

export default index