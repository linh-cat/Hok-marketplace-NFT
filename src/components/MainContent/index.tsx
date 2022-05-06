/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import "./index.scss"

// ant design 
import { SearchOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";


// component
import SpinHok from "../SpinHok"
import ButtonHok from "../ButtonHok"
import CardHok from "../CardHok"

// 
import { useDispatch, useSelector } from 'react-redux'
import { account, collection, collectionContract, marketplaceContract, collectionGenx, pageGenx } from '../../redux/selector/selector';
import { loadSortHandler, loadPaginate } from '../../redux/actions/action-creators/filterAction'
import web3 from '../../connection/web3';

const index = () => {
    const [seearchValue, setSearchValue] = useState("")
    const [sort, setSort] = useState('')
    const [reload, setReload] = useState('')
    const [loadingBtn, setLoadingBtn] = useState(false)
    const dispatch = useDispatch()
    const Collection = useSelector(collectionGenx)
    const Account = useSelector(account)
    const CollectionContract = useSelector(collectionContract)
    const MarketContract = useSelector(marketplaceContract)
    const Page = useSelector(pageGenx)

    const ChangeSortHandler = () => {
        // console.log('xxx')
        // setSort(value)
        // dispatch(loadSortHandler(value))
    }
    const seeMoreHandler = () => {
        setTimeout(() => {
            dispatch(loadPaginate(1))
            setLoadingBtn(false)
        }, 1000)
        setLoadingBtn(true)
    }
    const makeOfferHandler = (event: any, id: any, key: any) => {
        event.preventDefault();
        console.log('id in func:  ', id)
        console.log('key in func:  ', key)
        if (!web3) {
            return
        }
        const enteredPrice = web3.utils.toWei('0.0001', 'ether');
        console.log("enteredPrice: ", enteredPrice)
        CollectionContract.methods.approve(MarketContract.options.address, id).send({ from: Account })
            .on('transactionHash', (hash: any) => {
                window.alert('dang ban thanh cong')
            })
            .on('receipt', (receipt: any) => {
                MarketContract.methods.makeOffer(id, enteredPrice).send({ from: Account })
                    .on('error', (error: any) => {
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
                        <ButtonHok type="default" text="Newest" backgroundColor="#999999" color="#fff" radius="5px" bold="bold" onClick={ChangeSortHandler} />
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
            {Collection.length} Items
            <Row gutter={[16, 16]}>
                {Collection
                    .slice(0, Page)
                    .map((NFT: any, key) => {

                        return (
                            <>
                                <Col span={4} key={key}>
                                    {/* <button onClick={(e)=>makeOfferHandler(e,NFT.id, key)}>xxx</button> */}
                                    <CardHok name='GenX' id={NFT.id} price={2} cardImage={`https://ipfs.infura.io/ipfs/${NFT.img}`} isMain={true} />
                                </Col>

                            </>
                        )
                    })}
            </Row>

            <ButtonHok loading={loadingBtn} type="default" text="See more" radius="5px" bold="bold" onClick={seeMoreHandler} />

        </div>
    )
}

export default index