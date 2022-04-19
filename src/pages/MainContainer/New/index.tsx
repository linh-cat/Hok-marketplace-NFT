import React, { useState, useEffect } from 'react'
import "./index.scss"
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';


import ButtonHok from "../../../components/ButtonHok"
import ComboBoxHok from "../../../components/ComboBoxHok"

const Index = () => {
    const [test1, setTest1] = useState("test1")

    const options = [{
        value: "123", name: "123"
    }]
    const tests = [{
        value: "test1",
        name: "test1"
    }, {
        value: "test2",
        name: "test2"
    }]

    function handleChange(value: any) {
        setTest1(value)
    }

    console.log(test1)
    return (
        <div className='form__new'>
            <div className='title'>Mint new NFT</div>
            <Row>
                <ComboBoxHok options={tests} title="type" width="180px" onChangeValue={handleChange} values={test1} />
                <ComboBoxHok options={options} defaultValue={"123"} title="Accessories" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Arms" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Back" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Brain Shell" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Endoskeleton" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Body" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Deltoil" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Energy" width="180px" />
            </Row>
            <ButtonHok text='Create' type='primary' />

        </div>
    )
}

export default Index