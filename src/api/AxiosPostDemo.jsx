import axios from 'axios';
import React, { useState, useEffect } from 'react'

function AxiosPostDemo() {
    const [postData, setPostData] = useState([]);

    // const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    //Get data:
    useEffect(() => {
        axios.get(`${baseUrl}/1`)
            .then((res) => setPostData([res.data]));
    }, []);

    //Post data:
    const handlerPostData = () => {
        axios.post(baseUrl, {
            title: 'New Post by Peter Parker',
            body: 'This boby is posted by the Peter Paker.... right!'
        })
            .then((res) => {
                console.log('Post Successful:', res.data);
                setPostData([res.data]);
            })
    };
    if (!postData) return "nothing"

    return (
        <div>
            <h1>Axios Post Demo</h1>
            <ul>
                {postData &&
                    postData.map((item) => {
                        return <li key={item.id}>{item.title}: <ul><li> {item.body} </li></ul> </li>
                    })
                }
            </ul>
            <button onClick={handlerPostData} >Post</button>
        </div>
    )
}

export default AxiosPostDemo
