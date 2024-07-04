import React, { useState, useEffect } from 'react';


const PREFIX ='codepen-clone-'

export default function useLocalStorage(key, initialValue){

    const preFixedkey = PREFIX + key

    const [value, setValue] = useState(() => {
        const value = window.localStorage.getItem(preFixedkey)
        return value? JSON.parse(value) : initialValue
    })
    useEffect(() =>
        window.localStorage.setItem(preFixedkey, JSON.stringify(value)), [value]
    )
    return [value, setValue]
}

