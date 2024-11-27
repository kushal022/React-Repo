import React from 'react'
import { useState } from 'react'
import './style.css'

const details = []
const logInput = []
function CurrentPage() {

    const [currentPage, setCurrentPage] = useState('signup');
    const [uName ,setUname] = useState('')
    const [email,setEmail] = useState('')
    const [pswd, setPswd] = useState('')
    const [logUname, setLogUname] = useState('')
    const [logPswd, setLogPswd] = useState('')
    const [isDiabled, setIsDisabled] = useState(false)
    
    const userName = (e) =>{
        setUname(e.target.value)
        // console.log(uName)
    }

    const submitSign = (e)=>{
        if((uName && email && pswd)===''){
            alert('Please fill all fields')
            
        }else{
            e.preventDefault();
            details.push({username:uName, email:email, password:pswd})
            console.log(details)
            console.log(uName)
            console.log(email)
            console.log(pswd)
            // setCurrentPage('login')
            setIsDisabled(true)
        }
    }
    
    const loginHandler = (e)=>{
        if ((logUname && logPswd)===''){
            alert('Please fill all fields')
        }else{
            e.preventDefault();
            logInput.push({username:logUname, password:logPswd})
            console.log(logInput);
        }
    }

  function currentPageHandler(){
    switch(currentPage){
      case "signup":
        return( 
            <div className='container'>
            <h1 className='heading'>Sign Up!</h1>
            <p>Create Account</p>
            <form >
            {/* <form onSubmit={submitSign} > */}
              <label>Username:
                <input 
                    type="text" 
                    value={uName}
                    // onChange={userName}
                    onChange={(e)=>setUname(e.target.value)}
                    required
                     />
              </label>
              <label>
                Email:
                <input 
                    type="email" 
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
              </label>
              <label>
                Password:
                <input 
                    type="password" 
                    name="password" 
                    onChange={(e)=>setPswd(e.target.value)}
                    required
                    />
              </label>
              {/* <input type="submit" value="Submit" /> */}
            </form>
            <button type='submit' 
                onClick={submitSign}
                disabled={isDiabled} >Submit</button>
            <button onClick={()=>setCurrentPage('login')} >Have an Account?</button>
            {/* <p>Forgot Password? <a href="/forgot-password">Reset Password</a></p> */}
          </div>
        )
        break;
      case "login":
        return (
            <div className='container'>
              <h1 className='heading'>Welcome Back!</h1>
              <p>Log In!</p>
              <form>
                <label>Username:
                  <input 
                    type="text" 
                    name="userName" 
                    value={logUname}
                    onChange={(e)=>setLogUname(e.target.value)}
                    required
                    />
                </label>
                <label>
                  Password:
                  <input 
                    type="password" 
                    name="password" 
                    value={logPswd}
                    onChange={(e)=>setLogPswd(e.target.value)}
                    required
                    />
                </label>
              <button onClick={()=>setCurrentPage('reset')} style={{textDecoration:"underline"}} >Forgot Password?</button>
        
              </form>
              <button type='submit' onClick={loginHandler} >Login</button>
              <button onClick={()=>setCurrentPage('signup')}>Create an Account</button>
            </div>
          )
        break;
      case "reset":
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
            <button onClick={()=>alert('Link send to your Email !!')} >Send Reset Link</button>
            <button onClick={()=>setCurrentPage('login')}>Go Back</button>
          </div>
          )
    }
  }
  return (
    <div>
      {/* <AppSignUp/> */}
      {currentPageHandler()}
    </div>
  )
}

export default CurrentPage
