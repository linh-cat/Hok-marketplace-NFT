import React from 'react'
import "./index.scss"

import ComboBoxHok from "../ComboBoxHok"
import { accessories } from './List'
const index = () => {
    const options = [{ value: "genx", name: "GenX" }, { value: "GenY", name: "GenY" }, { value: "GenZ", name: "GenZ" }]
    return (
        <div className="filter">
            <div className='title'>Filter</div>
            <ComboBoxHok options={options} width="180px" title='Collection' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Accessories' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Arms' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Back' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Body' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Brain Shell' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Deltoid' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Energy' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Accessories' defaultValue='genx' />
            <ComboBoxHok options={options} width="180px" title='Endoskeleton' defaultValue='genx' />
        </div>
    )
}

export default index