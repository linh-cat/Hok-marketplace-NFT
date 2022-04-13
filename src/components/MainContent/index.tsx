/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import "./index.scss"

// ant design 
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


// component
import SpinHok from "../SpinHok"
import ButtonHok from "../ButtonHok"
import CardHok from "../CardHok"
import ToastHok from "../ToastHok"

// images

const index = () => {
    const [seearchValue, setSearchValue] = useState("")

    return (
        <div className="main__content">
            <ToastHok
                toastList={[
                    {
                        id: 1,
                        title: 'Successfully',
                        description: 'This is danger toast component',
                    }
                ]}
                position={'top-left'}
                show={true}
                label={'success'}
                timeShow={5000}
            />
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
            Ethereum is a developer’s blockchain, built by developers, for developers

            <Row gutter={[16, 16]}>
                <Col span={4}>
                    <CardHok />
                </Col>
                <Col span={4}>
                    <CardHok />
                </Col>
                <Col span={4}>
                    <CardHok />
                </Col>
                <Col span={4}>
                    <CardHok />
                </Col>
                <Col span={4}>
                    <CardHok />
                </Col>
                <Col span={4}>
                    <CardHok />
                </Col>
            </Row>


        </div>
    )
}

export default index