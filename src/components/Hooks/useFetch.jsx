import React, { useEffect, useState } from 'react'

export const  useFetch = (API) => {
    const [state , setState] = useState([])
    useEffect(() => {
        const getRequest = async () => {
            const res = await fetch(API)
            const data = await res.json()
            setState(data)
        }
        getRequest()
    },[])

    return  state
}
