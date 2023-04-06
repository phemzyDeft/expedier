import React, { useState } from 'react'
import style from '../../styles/Auth.module.css'
import {BiEnvelope} from 'react-icons/bi'
import {IoMdLock} from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'

const Login = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <div className={style.registercontainer}>
      <h2 className='mb-3'>Welcome Back.</h2>
      <form action="">
        <div className='my-4'>
          <label htmlFor="email" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your username or email address</label>
          <div className="container_search w-100 d-flex px-4" style={{
            border: '1px solid #4285F4',
            borderRadius: '9px',
            padding: '.8rem 0'
          }}>
            <div className="search_btn pe-3" style={{
                borderRight: '1px solid #B6B6B6',
                color: '#B6B6B6'
              }}
            >
              <BiEnvelope />
            </div>
            <input type='email' placeholder='Username or email address' id='email' required className={`${style.input} w-100 ps-3`}/>
          </div>
        </div>
        <div className='mt-4'>
          <label htmlFor="password" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your Password</label>
          <div className="container_search w-100 d-flex px-4" style={{
            border: '1px solid #4285F4',
            borderRadius: '9px',
            padding: '.8rem 0'
          }}>
            <div className="search_btn pe-3" style={{
                borderRight: '1px solid #B6B6B6',
                color: '#B6B6B6'
              }}
            >
              <IoMdLock />
            </div>
            <input type={toggle ? 'text' : 'password'} placeholder='Password' required id='password' className={`${style.input} w-100 ps-3`}/>
            <span onClick={handleToggle} style={{cursor: 'pointer', color: '#B6B6B6'}}>{toggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</span>
          </div>
        </div>
        <Link href={"/forgotpassword"} className={`${style.forgotpasswordlink} float-end p-2`}>Forgot Password ?</Link>
        <div>
          <button type='submit' className={`${style.submit} btn btn-lg w-100`}>Sign in</button>
        </div>
      </form>
      <div className='my-4 text-center'>
        <span className={`${style.withgoogle}`}><Image src={"/authimages/google.png"} width={26} height={26  }/> Sign in with Google</span>
        <span className={`${style.withgoogle} mx-4`} style={{background: '#F7F7F7'}}>
          <Image src={"/authimages/Facebook.png"} width={26} height={26}/>
        </span>
        <span className={`${style.withgoogle}`} style={{background: '#F6F6F6'}}>
          <Image src={"/authimages/apple.png"} width={26} height={26}/>
        </span>
      </div>
      <div className='text-center'>
        <Link href={"/register"} style={{fontSize: '14px', color: 'black'}}>New to Expedier? <span style={{color: '#4285F4'}}>Register</span></Link>
      </div>
    </div>
  )
}

export default Login