import { Form, Input, Button, Checkbox } from 'antd';
import React from "react";
import "./index.scss"

type FormProps = {
    title: string,
    initialValues?: any,
    onFinish?: any,
    onFinishFailed?: any,
    onValuesChange?: any
}


const Demo: React.FC<FormProps> = (props) => {
    const { children, title, onValuesChange, onFinish, onFinishFailed } = props

    return (
        <Form onValuesChange={onValuesChange} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <h1 className='form__title'>{title}</h1>
            {children}
        </Form>
    );
};
export default Demo;