import React from "react";
import { useState } from "react";

function StateDemo2(){
    const userData = {
        name: 'Herry',
        age: 26,
        shareCount: 0,
    }
    const [data,setData] = useState(userData);

    function updateValue(){
        // setData({
        //     name: 'Herry Potter',
        //     age: 27,
        //     shareCount: data.shareCount + 1, // Increment by 1
        // })

        // //--------------- Hold Previous Value ? Not Holding -----------------------------
        // //---------------Update Previous Value ? How -----------------------------

        // setData({
        //     name: data.name,
        //     shareCount: data.shareCount + 1,  // Increment shareCount by 1
        // })
        // setData({
        //     shareCount: data.shareCount + 1,  // Increment shareCount by 1
        // })
        // setData({
        //     name: data.name,
            
        //     shareCount: data.shareCount + 1,  // Increment shareCount by 1
        // })

        //----------------- Now Hold Previous Value ---------------------------
        // ----------- Increment by 3
        setData((prevData)=>(
            {
                name: 'Herry Potter',
                age: 27,
                shareCount: prevData.shareCount + 1,  // 1 // Increment shareCount by 1
            }
        ))
        setData((prevData)=>(
            {   
                name: prevData.name,
                age: prevData.age,
                shareCount: prevData.shareCount + 1,  // 2 // Increment shareCount by 1
            }
        ))
        setData((prevData)=>(
            {   
                name: prevData.name,
                age: prevData.age,
                shareCount: prevData.shareCount + 1,  // 3 // Increment shareCount by 1
            }
        ))
    }

    function prevValue(){
        setData(
            {
                name: 'Herry',
                age: 26,
                shareCount: data.shareCount - 1,  // Decrement shareCount by 1
            }
        )
    }
return(
    <>
    <h1>Hello this is React State: Using Functional Component</h1>
    <h2>Name: {data.name}</h2>
    <h2>Age: {data.age}</h2>
    <h2>The content share by: {data.shareCount} </h2>
    <button onClick={updateValue} >Share</button>
    <button onClick={prevValue} >Previous Value</button>
    </>
)

}
export default StateDemo2;