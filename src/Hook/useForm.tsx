import React, { useState } from 'react'



export const useForm = ({ initialState, callBack }: { initialState: any, callBack: any }) => {


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

