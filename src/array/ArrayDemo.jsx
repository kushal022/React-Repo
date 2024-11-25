import React, { useState } from "react";

function ArrayDemo(){
    const arr = ['Apple','Banana','Orange',1, 2, 3, 4, 5];

    //1 Accessing elements of array using index
    //2 Accessing elements of array using array destructuring
    const [firstElement, secondElement,...rest] = arr; 
    //3 Accessing elements of array using spread operator
    // const [arr1,setArr1] = useState(...arr)// not a good idea

    //----------------------------------------------------
    //4 Accessing elements of array using for loop
    let item=[];
    for(let index = 0; index<arr.length;index++){
        item.push(<li>{arr[index]}</li>)
    }
    //----------------------------------------------------
    //     let item2 = [];
    //     arr.forEach(e=>{
    //         item2.push(<li key={e}>{e}</li>)
    // })
    

    //5 Accessing elements of array using map function
    const listData = arr.map(ele=>(
        <li key={ele}>{ele}</li>
    ))
    //6 Accessing elements of array using filter function


    return(
        <>
        <h1>This is Array Demo:</h1>
        <h2>Whole Array:</h2>
        <h5>{arr}</h5>
        <h2>By Indexing:</h2>
        <h5>{arr[0]}</h5>
        <h5>{arr[1]}</h5>
        <h5>{arr[2]}</h5>
        <h5>{arr[3]}</h5>
        <h5>{arr[4]}</h5>
        <h2>By Destucturing:</h2>
        <h4>{firstElement}</h4>
        <h4>{secondElement}</h4>
        <h4>{rest}</h4>
        {/* <h4>{arr1}</h4> */}
        <h2>By for loop: access as a list</h2>
        <h4>{item} </h4>
        <h2>By Map Method: </h2>
        <ol type="i">
            {arr.map(element=>{return (<li>{element}</li>)})}
        </ol>
        <ol type="a">{listData}</ol>
        {/* <h2>By forEach: access as a list</h2> */}
        {/* <h4>{item2}</h4> */}

        </>
    )
}

export default ArrayDemo;