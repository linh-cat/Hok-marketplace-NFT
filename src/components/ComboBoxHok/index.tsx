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
    defaultValue?: string,
    defaultActiveFirstOption?: boolean
}

const index = ({ options, onChangeValue, values, width, title, defaultValue, defaultActiveFirstOption }: ComboBoxProp) => {

    function handleSearch(value: any) {
        // console.log(`selected ${value}`);
    }

    return (
        <div className="combobox">
            <div className="combobox__head">
                <div className="combobox__head--title">{title}</div>
            </div>
            <Select defaultValue={defaultValue} style={{ width: width }} onChange={onChangeValue} onSearch={handleSearch} allowClear showSearch value={values} defaultActiveFirstOption={defaultActiveFirstOption}>
                {options.map((val) => {
                    return (<Option value={val.value} key={val.value}>{val.name}</Option>)
                })}
            </Select>
        </div>
    )
}

export default index