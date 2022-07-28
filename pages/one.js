import { React, useEffect, useState } from 'react'

const one = () => {
    const [loading, setLoading] = useState(false)
    const [imgSrc, setImgSrc] = useState('')
    
    const getImage = async () => {
        setLoading(true)
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        
        response.json().then(response => {
            if (response.status == 'success') {
                setImgSrc(response.message)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        getImage()
    }, [])

  return (
    <div>
        {loading && <div>Loading...</div>}
        {!loading && <img src={imgSrc} className=""></img>}          
        {!loading && <button onClick={getImage} className="border-2 p-2 mt-4">Load another image</button>}
    </div>
  )
}

export default one