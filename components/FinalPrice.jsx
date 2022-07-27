import {React} from 'react'

const FinalPrice = ({ label, state, setState }) => {
    const changeValue = (e) => {
        try {
            let finalValue = parseFloat(e.target.value)
            let vat = state.vat
            let startPrice
            if (isNaN(finalValue)) {
                finalValue = ''
                startPrice = ''
            } else {
                startPrice = Math.round((finalValue / (1 + vat)) * 100) / 100
            }
            setState({
                start: startPrice,
                vat,
                final: finalValue
                })
        } catch (e) { }
    }
    return (
        <div className="flex flex-direction-row align-center gap-4">
            <label className="text-2xl text-center w-full text-yellow-100">{label}</label>
            <input className="border border-yellow-200 rounded-lg background-light p-1 w-full" value={state.final} onChange={e => changeValue(e)}/>
        </div>
    )
}

export default FinalPrice