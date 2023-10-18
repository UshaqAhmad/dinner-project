import React, { useState } from 'react'
import LoginUI from './loginComponents/LoginUI'
import SignupUI from './loginComponents/SignupUI'

const LoginComp = ({ activeLoginFunc }) => {
  const [activeState, setActiveState] = useState(false)
  const activeStateFunc = ()=>{
    setActiveState(!activeState)
  }
  return (
    <div>
      <div className='CartCrossIcon'>
        <i onClick={activeLoginFunc} className='fas fa-xmark'></i>
      </div>
      <div className='loginLogo text-center'>
        <img
          src='https://cdn.shopify.com/s/files/1/0752/0442/8072/files/main_150x.svg?v=1684402895'
          alt=''
          width={100}
          height={100}
        />
      </div>
      {!activeState && (
        <div className='loginComponent'>
          <LoginUI  activeStateFunc={activeStateFunc}/>
        </div>
      )}
      {activeState && (
        <div className='SignUpComponent'>
          <SignupUI activeStateFunc={activeStateFunc} />
        </div>
      )}
    </div>
  )
}

export default LoginComp
