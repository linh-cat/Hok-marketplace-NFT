import React from 'react'
import "./index.scss"

import ComboBoxHok from "../ComboBoxHok"

const index = () => {

    const options = [{ value: "genx", name: "GenX" }, { value: "GenY", name: "GenY" }, { value: "GenZ", name: "GenZ" }]

    return (
        <div className="filter">
            <ComboBoxHok options={options} width="180px" title='Collection' />
            <ComboBoxHok options={options} width="180px" title='Accessories' />
            <ComboBoxHok options={options} width="180px" title='Arms' />
            <ComboBoxHok options={options} width="180px" title='Back' />
            <ComboBoxHok options={options} width="180px" title='Body' />
            <ComboBoxHok options={options} width="180px" title='Brain Shell' />
            <ComboBoxHok options={options} width="180px" title='Deltoid' />
            <ComboBoxHok options={options} width="180px" title='Energy' />
            <ComboBoxHok options={options} width="180px" title='Accessories' />
            <ComboBoxHok options={options} width="180px" title='Endoskeleton' />
        </div>
    )
}

export default index