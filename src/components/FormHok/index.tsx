import { Form, Input, Button, Checkbox } from 'antd';
import React, { FunctionComponent } from "react";

type FormProps = {
    onFinish?: () => void,
    onFinishFailed?: () => void,
    children?: React.ReactNode;
}


const Demo: FunctionComponent<FormProps> = (props) => {
    const { children } = props


    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            {/* {...children} */}
        </Form>
    );
};
export default Demo;