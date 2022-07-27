import {React } from 'react'

const StartPrice = ({ label, state, setState }) => {
    console.log('state changed')
    console.log(state)
    const changeValue = (e) => {
        try {
            let startValue = parseFloat(e.target.value)
            let vat = state.vat
            let finalPrice
            if (isNaN(startValue)) {
                startValue = ''
                finalPrice = ''
            } else {
                finalPrice = Math.round((startValue + startValue * vat) * 100) / 100
            }
            setState({
                start: startValue,
                vat,
                final: finalPrice
            })
        } catch (e) { }
    }
    return (
        <div className="flex flex-direction-row align-center gap-4">
            <label className="text-2xl text-center w-full text-yellow-100">{label}</label>
            <input className="border border-yellow-200 rounded-lg background-light p-1 w-full" value={state.start} onChange={e => changeValue(e)}/>
        </div>
    )
}

export default StartPrice