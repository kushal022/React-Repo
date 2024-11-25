import React from "react";

function ArrayDemo2(){
    const obj =    {
        name: 'Peter Parker',
        movie: 'Spider Man',
        email: 'peterparker@spidy.com'
    }
    const arr =[ 
        {
        name: 'Peter Parker',
        movie: 'Spider Man',
        email: 'peterparker@spidy.com'
    },
        {
        name: 'Harry',
        movie: 'Harry POtter',
        email: 'harrypoter@potter.com'
    },
        {
        name: 'Harry',
        movie: 'Harry POtter',
        email: 'harrypoter@potter.com'
    },

]
    const data = arr.map((ele, id) => (
        <li key={id}>Name: {ele.name} Movie: {ele.movie} Email: {ele.email} </li>
    ))
    const data2 = arr.map((ele, id)=> (
        console.log(id),
        console.log(ele),
        <div key={id} >
            <h2>Name: {ele.name}</h2>
            <h2>Movie: {ele.movie}</h2>
            <h2>Email: {ele.email}</h2>
        </div>
    ))
    return(
        <div>
            <h1>Array Demo 2</h1>
            <hr />
            <h2>Name: {obj.name}</h2>
            <h2>Movie: {obj.movie}</h2>
            <h2>Email: {obj.email}</h2>
            <hr />
            <h5>Name:-- {arr[0].name}</h5>
            <hr />
            <h1>By Map Method:--</h1>
            <ul>{data}</ul>
            <hr />
            <div>{data2}</div>
        </div>
    )
}

export default ArrayDemo2;