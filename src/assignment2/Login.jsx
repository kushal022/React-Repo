import React from 'react'
import './style.css'
function Login() {
  return (
    <div className='container'>
      <h1 className='heading'>Welcome Back!</h1>
      <p>Log In!</p>
      <form>
        <label>Username:
          <input type="text" name="userName" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      <a href="/forgot-password">Forgot Password?</a>

      </form>
      <button >Login</button>
      <a href="/login">Create an Account</a>
    </div>
  )
}

export default Login
