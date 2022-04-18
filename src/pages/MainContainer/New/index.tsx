import React from 'react'
import "./index.scss"
import { Row, Col } from 'antd';


import ComboBoxHok from "../../../components/ComboBoxHok"

const index = () => {
    const options = [{
        value: "123",
        name: "123"
    }]

    return (
        <div className='form__new'>
            <div className='title'>Mint new NFT</div>
            <Row>

            </Row>
            <ComboBoxHok options={options} defaultValue={"123"} title="type" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Accessories" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Arms" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Back" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Brain Shell" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Endoskeleton" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Body" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Deltoil" width="180px" />
            <ComboBoxHok options={options} defaultValue={"123"} title="Energy" width="180px" />
        </div>
    )
}

export default index