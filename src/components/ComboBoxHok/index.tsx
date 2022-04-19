import React from 'react'
import "./index.scss"
import { Select } from 'antd';
const { Option } = Select;

type ComboBoxProp = {
    options: any[],
    onChangeValue?: any,
    onSelect?: any,
    values?: string,
    width?: string | undefined,
    title?: string | undefined,
    defaultValue: string
}

const index = ({ options, onChangeValue, values, width, title, defaultValue }: ComboBoxProp) => {

    function handleSearch(value: any) {
        // console.log(`selected ${value}`);
    }

    return (
        <div className="combobox">
            <div className="combobox__head">
                <div className="combobox__head--title">{title}</div>
            </div>
            <Select defaultValue={defaultValue} style={{ width: width }} onChange={onChangeValue} onSearch={handleSearch} allowClear showSearch value={values}>
                {options.map((val) => {
                    return (<Option value={val.value}>{val.name}</Option>)
                })}
            </Select>
        </div>
    )
}

export default index