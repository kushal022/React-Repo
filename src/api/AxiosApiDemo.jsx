import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AxiosApiDemo = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => setData(res.data));

    }, [])
    return (
        <div>
            <h1>Axios Api Demo</h1>
            {data && data.map((items) => {
                return <p key={items.id} >{items.id}: {items.title} </p>
            })}

        </div>
    )
}

export default AxiosApiDemo
