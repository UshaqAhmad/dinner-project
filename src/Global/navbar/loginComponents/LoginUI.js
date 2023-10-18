import React from 'react'

const LoginUI = ({activeStateFunc}) => {
  return (
    <>
      <div className='email'>
        <input type='email' placeholder='Email Address' />
      </div>
      <div className='password'>
        <input type='password' placeholder='Password' />
      </div>
      <div className='actionButton text-center'>
        <button>Login</button>
      </div>
      <div class='signupLink text-center'>
        <p onClick={activeStateFunc}>Don't have an account? Create an account</p>
      </div>
    </>
  )
}

export default LoginUI
