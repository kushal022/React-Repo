import React from "react";

function ArrayDemo3(){
    //---------------- forEach() v/s map()
    const num = [100,22,33,34,5]
    const num2 = [5,4,33,2,1]
    console.log('Array: ',num)
    ////////////////////////////////////////////////////////////////
    // forEach(): not return anything
    console.log('Using forEach(): ',num.forEach(x => x*x)) //Return: undefined
    // const nums = num.forEach(n => (
    //     // console.log(n*n),
    //     <p>n</p>
    // ))
    //----------------------------------------------------
    // map(): returns a new array with the results of calling a 
    // provided function on every element in the array.
    console.log('Using map(): ',num.map(x=>x*x)) //Return: [10000, 484, 1089, 1156, 25]
    // const numsMap = num.map((n , id)=>(
    //     <p key={id}>Number: {n}</p>
    // ))
    //////////////////////////////////////////////////////////////////
    // short() method use:
    // It returns the element with the lowest value.
    const min = num2.sort((a, b) =>(
        console.log('a: ',a,' b: ',b,' a-b: ',a-b),
         a - b
    ))
    console.log('Using sort(): ',min) // Return: [5, 22, 33, 34, 100]

    console.log('Using map(): ',num.map(x=>x*x).sort((a,b)=>(a-b))) //Return: [25, 484, 1089, 1156, 10000]
    // console.log('Using forEach(): ',num.forEach(x=>x*x).sort((a,b)=>(a-b))) //Return: Type Error

      

    return(
        <>
        <h1>forEach() v/s map()</h1>
        {/* <h4>{nums}</h4> */}
        {/* <h4>{ num.forEach(n=>(n))}</h4> */}
        {/* <h4>{ numsMap}</h4> */}
        </>
    )
}

export default ArrayDemo3;