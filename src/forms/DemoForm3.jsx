import React from 'react'
import {useForm} from 'react-hook-form'


const DemoForm3 = () => {
    const { register, handleSubmit,formState:{errors}} = useForm();
    const handleRegistration = (data) => console.log(data);
    const handelErrors =(errors)=>{};
    const registerOptions = {
        name: {required: 'Name is required'},
        email: {required: 'Email is required'},
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password should be atleast 8 characters'
            }
        },
    }
  return (
    <div>
        <form onSubmit={handleSubmit(handleRegistration, handelErrors)} >
            <label htmlFor='name' >Name: </label>
            <input type='text' name='name' {...register('name',registerOptions.name)} /> <br />
            <small> {errors?.name && errors.name.message} </small><br/><br/>
            <label htmlFor='email'>Email: </label>
            <input type="email" name='email' {...register('email',registerOptions.email)} /><br />
            <small> {errors?.email && errors.email.message}</small><br /><br />
            <label htmlFor='password'>Password: </label>
            <input type="password" name='password' {...register('password',registerOptions.password)} /><br />
            <small> {errors?.password && errors.password.message}</small><br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default DemoForm3
