import React from 'react'
import "./index.scss"

import ComboBoxHok from "../ComboBoxHok"
import { accessories, arms , back , body , BrainShell , deltoid , energy , endoskeletion , } from './List'
const index = () => {
    const options = [{ value: "genx", name: "GenX" }, { value: "GenY", name: "GenY" }, { value: "GenZ", name: "GenZ" }]
    return (
        <div className="filter">
            <div className='title'>Filter</div>
            <ComboBoxHok options={options} width="180px" title='Collection' defaultValue='ALL' />
            <ComboBoxHok options={accessories} width="180px" title='Accessories' defaultValue='ALL' />
            <ComboBoxHok options={arms} width="180px" title='Arms' defaultValue='ALL' />
            <ComboBoxHok options={back} width="180px" title='Back' defaultValue='ALL' />
            <ComboBoxHok options={body} width="180px" title='Body' defaultValue='ALL' />
            <ComboBoxHok options={BrainShell} width="180px" title='Brain Shell' defaultValue='ALL' />
            <ComboBoxHok options={deltoid} width="180px" title='Deltoid' defaultValue='ALL' />
            <ComboBoxHok options={energy} width="180px" title='Energy' defaultValue='ALL' />
            <ComboBoxHok options={endoskeletion} width="180px" title='Endoskeleton' defaultValue='ALL' />
            
        </div>
    )
}

export default index