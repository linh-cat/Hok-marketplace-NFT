import React from 'react'
import { Button } from 'antd';


type ButtonHokProps = {
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed",
    loading?: boolean | {
        delay?: number | undefined;
    } | undefined,
    text?: string | undefined,
    disabled?: boolean
    danger?: boolean | undefined,
    shape?: "circle" | "default" | "round" | undefined,
    icon?: any | undefined,
    size?: "large" | "middle" | "small" | undefined,
    ghost?: boolean | undefined,
    href?: string | undefined,
    onClick?: (event: MouseEvent) => void
}

const index = ({ type, loading, text, disabled, danger, shape, icon, ghost, href, size }: ButtonHokProps) => {
    return (
        <Button type={type} disabled={disabled} danger={danger} loading={loading} shape={shape} icon={icon} ghost={ghost} href={href} size={size}>{text}</Button>
    )
}

export default index