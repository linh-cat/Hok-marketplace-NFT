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

// 
import { useDispatch, useSelector } from 'react-redux'
import { account , collection ,collectionContract , marketplaceContract } from '../../redux/selector/selector';
import web3 from '../../connection/web3';

const index = () => {
    const [seearchValue, setSearchValue] = useState("")
    const [reload ,setReload] = useState('')
    const dispatch = useDispatch() 
    const Collection = useSelector(collection)
    const Account = useSelector(account)
    const CollectionContract = useSelector(collectionContract)
    const MarketContract = useSelector(marketplaceContract)
    const makeOfferHandler = (event: any, id:any, key:any) => {
        event.preventDefault();
        console.log('id in func:  ' , id)
        console.log('key in func:  ', key)
        if(!web3) {
            return
        }
        const enteredPrice = web3.utils.toWei('0.0001', 'ether');
        console.log("enteredPrice: " , enteredPrice)
        CollectionContract.methods.approve(MarketContract.options.address, id).send({ from: Account })
        .on('transactionHash', (hash: any) => {
            window.alert('dang ban thanh cong')
        })
        .on('receipt', (receipt:any) => {      
            MarketContract.methods.makeOffer(id, enteredPrice).send({ from:Account })
        .on('error', (error:any) => {
            window.alert('Something went wrong when pushing to the blockchain');
          }); 
        });
        setReload('')
      };


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
            Ethereum is a developer’s blockchain, built by developers, for developers
            <Row gutter={[16, 16]}>
                {Collection.map((NFT: any , key)=> {
                   
                        return (
                            <>
                            <Col span={4} key={key}>
                                {/* <button onClick={(e)=>makeOfferHandler(e,NFT.id, key)}>xxx</button> */}
                                <CardHok name='GenX' id={NFT.id} price={2} cardImage= {`https://ipfs.infura.io/ipfs/${NFT.img}`}/> 
                            </Col>
                            </>
                        ) 
                })}
            </Row>
        </div>
    )
}

export default index