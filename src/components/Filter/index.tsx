import React from 'react'
import "./index.scss"

import ComboBoxHok from "../ComboBoxHok"

const index = () => {

    const options = [{ value: "genx", name: "GenX" }]

    return (
        <div className="fiter">
            <ComboBoxHok options={options} width="150px" title='collection' />
            <ComboBoxHok options={options} width="150px" title='Accessories' />

        </div>
    )
}

export default index