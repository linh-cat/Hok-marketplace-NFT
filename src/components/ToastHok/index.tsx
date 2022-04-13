import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleFilled, WarningFilled, InfoCircleFilled, ExclamationCircleFilled, CloseSquareFilled } from "@ant-design/icons"
import "./index.scss"

type typeProps = {
    toastList: any[],
    position: string,
    label: 'success' | 'warning' | 'danger' | 'info',
    show: boolean,
    timeShow: number,
}

const Index = ({ toastList, position, label, show, timeShow }: typeProps) => {
    const [list, setList] = useState<any[]>([]);
    const [isShow, setIsShow] = useState<boolean>(show)


    useEffect(() => {
        setList(toastList);
        setIsShow(show);
    }, [toastList, list, show]);


    useEffect(() => {
        const timeoutShow = setTimeout(() => {
            setIsShow(false)
        }, timeShow)
        return () => {
            clearTimeout(timeoutShow)
        }
    }, [show, timeShow])


    return (
        <div className={isShow ? `notification-container ${position} ${label}` : "none"}>
            {
                list.map((toast) =>
                    <>
                        <div className={`toast-item ${label}`} key={toast.id}>
                            <div className="notification-icon" >
                                {label === "success" && <CheckCircleFilled style={{ fontSize: "18px" }} />}
                                {label === "warning" && <WarningFilled style={{ fontSize: "18px" }} />}
                                {label === "info" && <InfoCircleFilled style={{ fontSize: "18px" }} />}
                                {label === "danger" && <ExclamationCircleFilled style={{ fontSize: "18px" }} />}
                            </div>

                            <div>
                                <p className={`notification-title`}>{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>

                            <div className="notification-close" onClick={() => setIsShow(false)}>
                                <CloseSquareFilled />
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Index