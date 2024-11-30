import React from 'react'
import {useForm} from 'react-hook-form'

// React-hook-form
// list/ listening to user input
const DemoForm2 = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
      console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor='name' >Name: </label>
            <input type='text' name='name' {...register('name')} />
            <br></br>
            <br></br>
            <label htmlFor='email'>Email: </label>
            <input type="email" name='email' {...register('email')} />
            <br />
            <br />
            <label htmlFor='password'>Password: </label>
            <input type="password" name='password' {...register('password')} />
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default DemoForm2
