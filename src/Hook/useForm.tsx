import React, { useState } from 'react'

interface Props {
    initialState: any, callBack: any
}

export const useForm = (callBack: any, initialState = {}) => {

    const [values, setValues] = useState(initialState)
    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await callBack()
    }

    return {
        onChange, onSubmit, values
    }
}

