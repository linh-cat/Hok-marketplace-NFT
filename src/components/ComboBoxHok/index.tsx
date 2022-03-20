import React from 'react'
import "./index.scss"
import { Select } from 'antd';
const { Option } = Select;

type ComboBoxProp = {
    options: any[],
    onChangeValue?: any,
    values?: string,
    width?: string | undefined,
    title?: string | undefined
}

const index = ({ options, onChangeValue, values, width, title }: ComboBoxProp) => {

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="combobox">
            <div className="combobox__head">
                <div className="combobox__head--title">{title}</div>

            </div>
            <Select defaultValue="lucy" style={{ width: width }} onChange={handleChange} allowClear >
                {options.map((val) => {
                    return (<Option value={val.value}>{val.name}</Option>)
                })}
            </Select>
        </div>
    )
}

export default index