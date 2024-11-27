import React, { useState } from 'react'
import './pswdStyle.css'

const pswdData=[]
const RePswdData=[]
function Pswd() {
    const [isVisible1, setIsvisible1] = useState(false);
    const [isVisible2, setIsvisible2] = useState(false);
    const [pswd, setPswd] = useState('');
    const [RePswd, setRePswd] = useState('');
  return (
    <div className='pswd-box'>
      <form action="">
        <h2>Reset Password</h2>
        <ul>
            <li>
                <label>
                    <input 
                        type={isVisible1? 'text': 'password'} 
                        placeholder='Type Password'
                        value={pswd}
                        onChange={(e)=>setPswd(e.target.value)} 
                        required
                        />
                    <button
                        onClick={e=>{
                            e.preventDefault();
                            setIsvisible1(!isVisible1);
                            // console.log(pswd);
                        }}>
                        {isVisible1?'Hide':'Show'}
                    </button>
                </label>
            </li>
            <li>
                <label>
                    <input
                        type={isVisible2? 'text': 'password'} 
                        placeholder='Re-type Password'
                        value={RePswd}
                        onChange={(e)=>setRePswd(e.target.value)}
                        required
                        />
                    <button 
                        onClick={(e)=>{
                            e.preventDefault();
                            // setIsShow2(isShow2==='Show'?'Hide':'Show');
                            setIsvisible2(!isVisible2);
                        }}>
                            {isVisible2?'Hide':'Show'}
                    </button>
                </label>
            </li>
        </ul>
      </form>
      <button 
        className='submit-btn'
        type='submit'
        disabled={(pswd && RePswd)===''? true:false}
        onClick={(e)=>{
            e.preventDefault();
            pswdData.push(pswd);
            RePswdData.push(RePswd);
            if(pswd === RePswd){
                console.log('Password Reset Successfully!');
                alert('Password Reset Successfully!✅✅')
                setPswd('');
                setRePswd('');
            }else{
                console.log('Passwords do not match!');
                alert('Passwords do not match!❌❌')
                setPswd('');
                setRePswd('');
            }
        }}>Reset Password</button>
    </div>
  )
}

export default Pswd
