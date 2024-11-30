import React, { useState } from 'react'

const DemoForm1 = () => {
    const [name, setName] = useState('');
    // onSubmit handler:
    const showName = (event)=>{
        event.preventDefault();
        alert(`Hello, ${name}!`);
        setName(''); // Reset the input field after submission.
    }
  return (
    <div>
        <h1>Form Demo : 1</h1>
        <form action="" onSubmit={showName}>
            <fieldset>
                <legend>Enter your name:</legend>
                <label htmlFor='name' >Name: </label>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <br></br>
                <br></br>
                <input
                    type='submit'
                    value='Click Me'
                />
            </fieldset>
        </form>

    </div>
  )
}

export default DemoForm1
