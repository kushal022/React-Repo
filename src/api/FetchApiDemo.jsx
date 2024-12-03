import React, { useEffect, useState } from 'react'

const FetchApiDemo = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h3>Fetch Api Demo</h3>
            {data && data.map((items) => {
                return (
                    <p key={items.id}>{items.id}: {items.title} </p>
                )
            })}
        </div>
    )
}

export default FetchApiDemo
