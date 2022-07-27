import { React, forwardRef } from 'react'

const SubmitButton = ({ state }) => {
    let startPrice = state.start
    let vat = state.vat
    let finalPrice = state.final

    console.log('startPrice: ', startPrice)
    console.log('vat: ', vat)
    console.log('finalPrice: ', finalPrice)

    const submitForm = async (e) => {
        e.preventDefault();
        console.log('submit')
        let response = await fetch('a', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            startPrice,
            vat,
            finalPrice
            })
        })
    }
    
  return (
    <input className="mt-4 bg-yellow-300 text-black p-2 rounded-full border-2 border-black hover:bg-yellow-500 hover:cursor-pointer" type="submit" value="Submit" onClick={e => submitForm(e)}></input>
  )
}

export default SubmitButton