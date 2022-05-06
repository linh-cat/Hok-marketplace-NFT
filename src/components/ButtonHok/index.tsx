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
    onClick?: () => any,
    color?: string | undefined,
    bold?: string | undefined,
    border?: string | undefined,
    radius?: string | undefined,
    backgroundColor?: string | undefined,
    target?: string,
    className?: string
}

const index = ({ type, loading, text, disabled, danger, shape, icon, ghost, href, size, color, bold, border, radius, backgroundColor, target, onClick, className }: ButtonHokProps) => {
    return (
        <Button type={type} target={target} disabled={disabled} danger={danger} loading={loading} shape={shape} icon={icon} ghost={ghost} href={href} size={size} style={{ color: color, fontWeight: bold, border: border, borderRadius: radius, backgroundColor: backgroundColor }} onClick={onClick} className={className}>{text}</Button>
    )

}

export default index