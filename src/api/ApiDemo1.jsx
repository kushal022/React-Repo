// import React, { useEffect } from 'react'
// import { useState } from 'react'

// function ApiDemo1() {
//     var [quotes, setQuotes] = useState([])
//     useEffect(()=>{
//         // here mention sideEffect
//         var fetchQuotes = async ()=> {
//             var response = await fetch("https://api.quotable.io/random");
//             var data = await response.json();
//             setQuotes([data.content]);
//         };
//         fetchQuotes()
//     },[])
    
//     var mapData = quotes.map(quote=>(
//         <p>Today's Quote: {quote}</p>
//     ))

//   return (
//     <div>
//       <h1>This is Api Demo</h1>
//       <div>{mapData}</div>
//     </div>
//   )
// }

// export default ApiDemo1




import React, { useEffect, useState } from 'react';

// Live Class: on Side Effect;useEffect()

function ApiDemo1() {
    const [quotes, setQuotes] = useState([]); // Initialize as an array
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        // Here mention side effect
        const fetchQuotes = async () => {
            // try {
                const response = await fetch("https://api.quotable.io/random");
                const data = await response.json();
                // setQuotes([data.content]); // Append the new quote
                setQuotes((prevQuotes) => [...prevQuotes, data.content]); // Append the new quote
                setAuthor((prevAuthor)=>[...prevAuthor,data.author]); // Append the new quote
                // setAuthor( data.author); // Set the author of the quote
            // } catch (error) {
                // console.error("Error fetching quotes:", error);
            // }
        };

        fetchQuotes();
    },[]); // Empty dependency array ensures it runs only once on mount

    const mapQuote = quotes.map((quote, index) => (
        <p key={index}>Today's Quote: {quote}</p> // Add a unique key for each item
    ));
    const mapAuthor = author.map((auth, index) => (
        <p key={index}>Author: {auth}</p> // Add a unique key for each item
    ));

    return (
        <div>
            <h1>This is API Demo</h1>
            <p>{mapQuote}</p>
            <p>{mapAuthor}</p>
        </div>
    );
}

export default ApiDemo1;

