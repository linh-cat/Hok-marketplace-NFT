/* eslint-disable no-self-assign */
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleFilled, WarningFilled, InfoCircleFilled, ExclamationCircleFilled, CloseSquareFilled } from "@ant-design/icons"
import "./index.scss"

type PropsToast = {
    toastList: any[]
    position: string,
    label: Label,
    timeShow: number,
    show: boolean,
}

export type ToastList = {
    id: number,
    title: string,
    description: string
}

export enum Label {
    SUCCESS = 'success', WARING = 'warning', DANGER = 'danger', INFO = 'info'
}

const Index = ({ position, label, timeShow, show, toastList }: PropsToast) => {
    const [isShow, setIsShow] = useState<boolean>(show)
    const [list, setList] = useState<ToastList[]>(toastList);

    useEffect(() => {
        const timeoutShow = setTimeout(() => {
            setIsShow(false)
        }, timeShow)
        return () => {
            clearTimeout(timeoutShow)
        }
    }, [timeShow])

    useEffect(() => {
        setList(toastList)
    }, [toastList])

    return (
        <div className={isShow ? `notification-container ${position} ${label}` : "none"}>
            {
                list.map((toast) =>
                    <>
                        <div className={`toast-item ${label}`} key={toast.id}>
                            <div className="notification-icon" >
                                {label === Label.SUCCESS && <CheckCircleFilled style={{ fontSize: "18px" }} />}
                                {label === Label.WARING && <WarningFilled style={{ fontSize: "18px" }} />}
                                {label === Label.INFO && <InfoCircleFilled style={{ fontSize: "18px" }} />}
                                {label === Label.DANGER && <ExclamationCircleFilled style={{ fontSize: "18px" }} />}
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