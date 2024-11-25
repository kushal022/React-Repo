import React, { useState } from 'react'


// var empList = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 28,
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       age: 35,
//     },
//     {
//       id: 4,
//       name: "Johnson",
//       age: 39,
//     },
//   ];

var arr = [1,2,3,4,5]
function Mapping2() {
    const [inputValue, setInputValue] = useState(""); // State for input value
    const [data, setData] = useState(arr)
    const handleChange = (e) => {
      setInputValue(e.target.value); // Update state with the input value
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form reload
      console.log("Input value:", inputValue); // Access the input value
      // arr.push(inputValue)
    
    setData(prevValue=> [...prevValue, inputValue]);
    // console.log(arr)
    console.log(data)
    
};

  const item2 = data.map(item => <li key={item}>{item}</li>);
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange} // Handle changes to the input value
        />
        <button type="submit">Submit</button>
      </form>
      <h2>value: {inputValue}</h2>
      <ul>
        {data}
      </ul>
      <p>{item2}</p>
      </div>
    );
  
//     const [data, setData] = useState("")
//     // const handleInputChange = () => {
//         // setData(inputValue)
//     // }
//   return (
//     <div>
//     <h1>Employee List: {data}</h1>
//     <form action="">
//       <input type="text"    />
//       {/* <input type="submit" /> */}
//       <button type='submit' >Enter</button>
//     </form>
//     </div>
//   )
}

export default Mapping2
