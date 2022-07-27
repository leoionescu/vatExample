import {React, forwardRef} from 'react'

const Select = ({ label, state, setState }) => {
    const changeValue = (e) => {
        try {
            let startValue = parseFloat(e.target.value)
            let vat = state.vat
            let finalPrice = Math.round((startValue + startValue * vat) * 100) / 100
            setState({
                start: startValue,
                vat,
                final: finalPrice   
                })
        } catch (e) { }
    }
    return(
        <div className="flex flex-direction-row align-center gap-4">
            <label className="text-2xl text-yellow-100">{label}</label>
            <select className="rounded-lg background-light p-2 w-full border border-yellow-200" value={state.vat} name="vatRate" id="vatRate" onChange={e => changeValue(e)}>
                <option value="0.1">10%</option>
                <option value="0.2">20%</option>
                <option value="0.3">30%</option>
                <option value="0.4">40%</option>
                <option value="0.5">50%</option>
            </select>
        </div>
    )
}

export default Select