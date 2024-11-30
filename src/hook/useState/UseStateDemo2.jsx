import React, { useState } from 'react'

function UseStateDemo2() {
    const [form, setState] = useState({
        username: '',
        password: '',
    })

    const updateData =(e)=> {
        // setState({...form,[e.target.name]:e.target.value})
        setState({...form, [e.target.name]: e.target.value})  // ES6 Destructuring assignment to update the state object directly  // Use spread operator to create a new object and copy all existing properties of the form object to the new object, except for the one being updated.  // Then, we update the value of the property corresponding to the updated input field.  // This way, we avoid mutating the original state object.  // Note: This approach doesn't trigger re-renders since we're not using the useState hook's second argument. If you want to trigger re-renders, you should use the second argument.  // Example: const [state, setState] = useState({ name: 'John' }); // Update state: setState({ name: 'Jane' }); // Trigger re-render: <Component name={state.name} />  // Example: const [state, setState] = useState({ name: 'John'
    }
    const printData =(e)=>{
        e.preventDefault()  // Prevent form from reloading
        console.log(form.username,form.password)
        alert(`username:  ${form.username}, and password: ${form.password}`)

    }
  return (
    <div>
      <h1>Demo 2: useState() hook</h1>
      <form onSubmit={printData}>
        <label htmlFor="username">Username: </label>
        <input type="text" name='username' value={form.username} onChange={updateData} />
        <br /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' value={form.password} onChange={updateData} />
        <br /><br />
        <input type="submit" />
      </form>
      {/* <p>Data: {form.username}{form.password}</p> */}
    </div>
  )
}

export default UseStateDemo2
