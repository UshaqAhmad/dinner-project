import React from 'react'

const SignupUI = ({ activeStateFunc }) => {
  return (
    <>
      <div className='loginComponent'>
        <div className='email'>
          <input type='text' placeholder='Full Name' />
        </div>
        <div className='email'>
          <input type='email' placeholder='Email Address' />
        </div>
        <div className='password'>
          <input type='password' placeholder='Password' />
        </div>
        <div className='actionButton text-center'>
          <button>Sign up</button>
        </div>
        <div class='signupLink text-center'>
          <p onClick={activeStateFunc}>
            Already have an account? go to the login
          </p>
        </div>
      </div>
    </>
  )
}

export default SignupUI
