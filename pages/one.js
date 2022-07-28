import { React, useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios'

const one = () => {
    const [imgSrc, setImgSrc] = useState('')

    const getImage = async () => {
        let response = await axios.get('https://dog.ceo/api/breeds/image/random')
        return response.data
    }

    let { data, status } = useQuery([], getImage)
    

  return (
    <div>
        {status == 'loading' && <div>Loading...</div>}
        {status == 'success' && <img src={data.message} className=""></img>}          
          {status == 'success' && <button onClick={async e => {
              data = { message: (await getImage()).message }
              console.log(data)
              console.log(status)
          }} className="border-2 p-2 mt-4">Load another image</button>}
    </div>
  )
}

export default one