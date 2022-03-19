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
                <div className="search_menu">
                </div>

                <div className="search__form">
                    <div className="search__form--label">
                        Type your keyword
                    </div>
                    <div className="search__form--input">
                        <SearchOutlined />
                        <input onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default index