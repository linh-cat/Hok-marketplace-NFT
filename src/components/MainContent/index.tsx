import React from 'react'
import { PoweroffOutlined } from '@ant-design/icons';
import SpinHok from "../SpinHok"


import ButtonHok from "../ButtonHok"

const index = () => {
    return (
        <div>
            <ButtonHok type="dashed" icon={<PoweroffOutlined />} size="large" />
            {/* <SpinHok /> */}
        </div>
    )
}

export default index