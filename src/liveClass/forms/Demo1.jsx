import React, { useState } from 'react'
import './demo1.css'
const Demo1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  })
  const [valid, setValid] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
    phone: true,
  })
  const [submit, setSubmit] = useState('')
  const [showPswd, setShowPswd] = useState({
    password: 'password',
    confirmPassword: 'password',
  })
  const [bgClr, setBgClr] = useState({
    password: '#f96d00',
    confirmPassword: '#f96d00',
  })
  //----------------------------- Handle Change:
  const handleChange = (e) => {
    var value = e.target.value;
    var name = e.target.name;
    setFormData({ ...formData, [name]: value })
  }
  //----------------------------- Show/Hide for Password:
  const handleShowPswd = () => {
    if (showPswd.password === 'password') {
      setShowPswd({ ...showPswd, ['password']: 'text' })
      setBgClr({ ...bgClr, ['password']: '#f2f2f2' })
    } else {
      setShowPswd({ ...showPswd, ['password']: 'password' })
      setBgClr({ ...bgClr, ['password']: '#f96d00' })
    }
  }
  const handleShowConfPswd = () => {
    if (showPswd.confirmPassword === 'password') {
      setShowPswd({ ...showPswd, ['confirmPassword']: 'text' })
      setBgClr({ ...bgClr, ['confirmPassword']: '#f2f2f2' })
    } else {
      setShowPswd({ ...showPswd, ['confirmPassword']: 'password' })
      setBgClr({ ...bgClr, ['confirmPassword']: '#f96d00' })
    }
  }
  //----------------------------- Halndel for Submit: 
  const handleSubmit = (e) => {
    e.preventDefault()// dont want to load browser
    var check = Object.keys(formData).every(function (field) {
      return checkField(field, formData[field])
    })
    if (check) {
      setSubmit('yes');
      console.log("Form submitted successfully");
      // alert('Form submitted successfully')
    } else {
      setSubmit('no');
      console.log('Form submission failed')
      // alert('Form submission failed')
    }
  }
  //----------------- Check field or validation: 
  var checkField = (fieldName, fieldValue) => {
    // console.log(fieldName,fieldValue)
    switch (fieldName) {
      case 'name':
        if (fieldValue.length >= 3) {
          setValid(prev => ({ ...prev, ['name']: true }))
          return true;
        } else {
          setValid(prev => ({ ...prev, ['name']: false }))
          return false;
        }
        break
      case 'email':
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue)) {
          setValid(prev => ({ ...prev, ['email']: true }))
          return true;
        } else {
          setValid(prev => ({ ...prev, ['email']: false }))
          return false;
        }
        break;
      case 'password':
        if (fieldValue.length > 6) {
          setValid(prev => ({ ...prev, ['password']: true }))
          return true;
        } else {
          setValid(prev => ({ ...prev, ['password']: false }))
          return false;
        }
        break;
      case 'confirmPassword':
        if (fieldValue === formData['password']) {
          setValid(prev => ({ ...prev, ['confirmPassword']: true }))
          // console.log('Password matched');
          return true;
        } else {
          setValid(prev => ({ ...prev, ['confirmPassword']: false }))
          // console.log('Passwords do not match');
          return false;
        }
        break
      case 'phone':
        if (/^\+?\d{1,4}?\s?\d{10}$/.test(fieldValue)) {
          setValid(prev => ({ ...prev, ['phone']: true }))
          return true;
        } else {
          setValid(prev => ({ ...prev, ['phone']: false }))
          return false;
        }
    }
    return true;
  }

  return (
    <div className='form-container'>
      <h1 className='heading' >React Forms</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Registration Form</legend>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter Your Name'
            />
            <p>{(valid.name) ? null : 'Name should be more then 3 character'}</p>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your Email'
            />
            <p>{(valid.email) ? null : 'Enter valid Email'}</p>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type={showPswd.password === "password" ? 'password' : 'text'}
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter Password'
            />
            <button type='button'
              style={{ backgroundColor: bgClr.password }}
              onClick={handleShowPswd} >
              {showPswd.password === 'password' ? 'Show' : 'Hide'}
            </button>
            <p>{(valid.password) ? null : 'Password should be more then 6'}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input
              type={showPswd.confirmPassword === "password" ? 'password' : 'text'}
              id='confirmPassword'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
            <button type='button'
              style={{ backgroundColor: bgClr.confirmPassword }}
              onClick={handleShowConfPswd} >
              {showPswd.confirmPassword === 'password' ? 'Show' : 'Hide'}
            </button>
            <p>{valid.confirmPassword ? null : 'Password does not match'}</p>
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter Phone Number'
            />
            <p>{(valid.phone) ? null : 'Enter valid Phone number'}</p>
          </div>
          <div>
            <button type='submit'>Submit</button>
            <p className='subMsg'>{(submit === 'yes') ?
              <span style={{ color: 'green' }} >Form Submitted Successfully</span> :
              (submit === 'no') ? <span>Form submission</span> : null}</p>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Demo1

