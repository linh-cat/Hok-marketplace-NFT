/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import "./index.scss"

// ant design 
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';

// component
import SpinHok from "../SpinHok"
import ButtonHok from "../ButtonHok"

// images

const index = () => {
    const [seearchValue, setSearchValue] = useState("")

    return (
        <div className="main__content">
            <div className="search">
                <ul className="search_menu">
                    <li className="search_menu--item">
                        <ButtonHok type="default" text="Newest" backgroundColor="#999999" color="#fff" radius="5px" bold="bold" />
                    </li>
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

                <div className="search__form">
                    <div className="search__form--label">
                        Type your keyword
                    </div>
                    <div className="search__form--input">
                        <SearchOutlined />
                        <input onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                </div>
            </div>
            <div>
                Ethereum is a developer’s blockchain, built by developers, for developers
            </div>
        </div>
    )
}

export default index