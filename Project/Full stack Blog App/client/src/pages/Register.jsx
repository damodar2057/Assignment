import React from 'react'
import { Link } from 'react-router-dom'
import '../style.scss'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <input type='username' placeholder='Create Username' />
        <input type='password' placeholder='Create Password' />
        <button>Register</button>
        <p>This is an error!</p>
        <span>Already have an account   <br /><Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
