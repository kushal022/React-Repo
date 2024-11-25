import React from 'react'
import './style.css'

function Reset() {
  return (
    <div className='container'>
    <h1 className='heading'>Reset Password</h1>
    <p>Reset Password!</p>
    <form>
      <label style={{textWrap:"wrap"}} >A reset link will be sent to your inbox!</label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
    </form>
    <button >Send Reset Link</button>
    <a href="/login">Go Back</a>
  </div>
  )
}

export default Reset
