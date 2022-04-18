import React from 'react'
import "./index.scss"
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';


import ButtonHok from "../../../components/ButtonHok"
import ComboBoxHok from "../../../components/ComboBoxHok"
import FormHok from "../../../components/FormHok"
import { useForm } from "../../../Hook/useForm"

const index = () => {
    const options = [{
        value: "123",
        name: "123"
    }]

    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };


    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        console.log(values)
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { onChange, onSubmit, values } = useForm(initialState, loginUserCallback)


    return (
        <div className='form__new'>
            <div className='title'>Mint new NFT</div>
            {/* <Row>
                <ComboBoxHok options={options} defaultValue={""} title="type" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Accessories" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Arms" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Back" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Brain Shell" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Endoskeleton" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Body" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Deltoil" width="180px" />
                <ComboBoxHok options={options} defaultValue={"123"} title="Energy" width="180px" />
            </Row>
            <ButtonHok text='Create' type='primary' /> */}
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        onChange={onChange}
                        required
                    />

                    <input
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        onChange={onChange}
                        required
                    />
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default index