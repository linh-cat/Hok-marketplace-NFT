import React from 'react'

import { Layout } from 'antd';

import HeaderComponent from "../../components/Header"
import FooterComponent from "../../components/Footer"
import FilterComponent from "../../components/Filter"
import SearchComponent from "../../components/Search"
import MainContentComponent from "../../components/MainContent"

const { Header, Footer, Sider, Content } = Layout;

const index = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header>
                <HeaderComponent />
            </Header>
            <Layout>
                <Sider>
                    <FilterComponent />
                </Sider>
                <Content>
                    <SearchComponent />
                    <MainContentComponent />
                </Content>
            </Layout>
            <Footer>
                <FooterComponent />
            </Footer>
        </Layout>
    )
}


export default index