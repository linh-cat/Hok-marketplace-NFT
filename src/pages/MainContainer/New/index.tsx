import React, { useState, useEffect } from 'react';
import './index.scss';
import { Row, Col, Form, Input, Button } from 'antd';
import ButtonHok from '../../../components/ButtonHok';
import ComboBoxHok from '../../../components/ComboBoxHok';
import FormHok from '../../../components/FormHok';

const Index = () => {
    const tests = [
        {
            value: '1',
            name: '1',
        },
        {
            value: '2',
            name: '2',
        },
    ];

    return (
        <div className="form__new">
            <div className="title">Mint new NFT</div>
            <Row>
                <ComboBoxHok options={tests} title="type" width="180px" />
                {/* <ComboBoxHok options={options} defaultValue={"123"} title="Accessories" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Arms" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Back" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Brain Shell" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Endoskeleton" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Body" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Deltoil" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Energy" width="180px" /> */}
            </Row>
            <ButtonHok text="Create" type="primary" />
            {/* <FormHok title="Mint new NFT" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </FormHok> */}
        </div>
    );
};

export default Index;
