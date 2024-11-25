import React from 'react'
import './style.css'

function SignUp() {
  return (
    <div className='container'>
      <h1 className='heading'>Sign Up!</h1>
      <p>Create Account</p>
      <form>
        <label>Username:
          <input type="text" name="userName" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <button >Submit</button>
      <a href="/login">Have an Account?</a>
      {/* <p>Forgot Password? <a href="/forgot-password">Reset Password</a></p> */}
    </div>
  )
}

export default SignUp
