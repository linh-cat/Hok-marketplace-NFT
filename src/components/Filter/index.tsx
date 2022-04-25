import React from 'react'
import "./index.scss"

import ComboBoxHok from "../ComboBoxHok"
import { accessories, arms , back , body , BrainShell , deltoid , energy , endoskeletion , } from './List'
import { useDispatch } from 'react-redux'
import { loadAccessoriesHandler, loadArmsHandler, loadBackHandler, loadBodyHandler, loadBrainHandler, loadDeltoidHandler, loadEndoHandler, loadEnergyHandler } from '../../redux/actions/action-creators/filterAction'
const Index = () => {
    const dispatch = useDispatch()
    const enteredAccessories = (value: any) =>{
        if (value === undefined) {
            dispatch(loadAccessoriesHandler(''))
        } else
        dispatch(loadAccessoriesHandler(value))
    }
    const enteredArms = (value: any) =>{
        if (value === undefined) {
            dispatch(loadArmsHandler(''))
        } else
        dispatch(loadArmsHandler(value))
        console.log(value)
    }
    const enteredBack = (value: any) =>{
        if (value === undefined) {
            dispatch(loadBackHandler(''))
        } else
        dispatch(loadBackHandler(value))
        console.log(value)
    }
    const enteredBody = (value: any) =>{
        if (value === undefined) {
            dispatch(loadBodyHandler(''))
        } else
        dispatch(loadBodyHandler(value))
        console.log(value)
    }
    const enteredBrain = (value: any) =>{
        if (value === undefined) {
            dispatch(loadBrainHandler(''))
        } else
       dispatch(loadBrainHandler(value))
        console.log(value)
    }
    const enteredDeltoid = (value: any) =>{
        if (value === undefined) {
            dispatch(loadDeltoidHandler(''))
        } else
        dispatch(loadDeltoidHandler(value))
        console.log(value)
    }
    const enteredEndo = (value: any) =>{
        if (value === undefined) {
            dispatch(loadEndoHandler(''))
        } else
        dispatch(loadEndoHandler(value))
        console.log(value)
    }
    const enteredEnergy = (value: any) =>{
        if (value === undefined) {
            dispatch(loadEnergyHandler(''))
        } else
        dispatch(loadEnergyHandler(value))
        console.log(value)
    }
    return (
        <div className="filter">
            <div className='title'>Filter</div>
            <ComboBoxHok options={accessories} width="180px" title='Collection' defaultValue='ALL' />
            <ComboBoxHok options={accessories} width="180px" title='Accessories' defaultValue='ALL' onChangeValue={enteredAccessories}/>
            <ComboBoxHok options={arms} width="180px" title='Arms' defaultValue='ALL' onChangeValue={enteredArms}/>
            <ComboBoxHok options={back} width="180px" title='Back' defaultValue='ALL' onChangeValue={enteredBack}/>
            <ComboBoxHok options={body} width="180px" title='Body' defaultValue='ALL' onChangeValue={enteredBody}/>
            <ComboBoxHok options={BrainShell} width="180px" title='Brain Shell' defaultValue='ALL'  onChangeValue={enteredBrain}/>
            <ComboBoxHok options={deltoid} width="180px" title='Deltoid' defaultValue='ALL' onChangeValue={enteredDeltoid}/>
            <ComboBoxHok options={energy} width="180px" title='Energy' defaultValue='ALL' onChangeValue={enteredEnergy}/>
            <ComboBoxHok options={endoskeletion} width="180px" title='Endoskeleton' defaultValue='ALL' onChangeValue={enteredEndo}/>
        </div>
    )
}

export default Index