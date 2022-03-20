import React from 'react'

import { Layout } from 'antd';

import HeaderComponent from "../../components/Header"
import FooterComponent from "../../components/Footer"
import FilterComponent from "../../components/Filter"
import MainContentComponent from "../../components/MainContent"

const { Header, Footer, Sider, Content } = Layout;

const index = () => {
    return (
        <Layout >
            <Header>
                <HeaderComponent />
            </Header>
            <Layout>
                <Sider>
                    <FilterComponent />
                </Sider>
                <Content>
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