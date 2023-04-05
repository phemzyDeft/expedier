import React from 'react'
import style from '../../styles/Auth.module.css'
import {BiEnvelope} from 'react-icons/bi'
import {IoMdLock} from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

const Register = () => {
  return (
    <div className={`${style.registercontainer} py-5`}>
      <h2 className='mb-3'>Sign Up.</h2>
      <form action="">
        <div class="row g-3">
          <div class="col">
            <label htmlFor="firstname" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your First Name</label>
            <input type="text" class="form-control" id='firstname' placeholder="Last name" style={{
              border: '1px solid #4285F4',
              borderRadius: '9px',
              padding: '.8rem'
            }}/>
          </div>
          <div class="col">
            <label htmlFor="lastname" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your Last name</label>
            <input type="text" class="form-control" id='lastname' placeholder="Last name" style={{
              border: '1px solid #4285F4',
              borderRadius: '9px',
              padding: '.8rem'
            }} />
          </div>
        </div>
        <div className='my-4'>
          <label htmlFor="email" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your Email Address</label>
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
            <input type='email' placeholder='Email Address' id='email' required className={`${style.input} w-100 ps-3`}/>
          </div>
        </div>
        <div className='my-4'>
          <label htmlFor="confirmemail" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Confirm your Email Address</label>
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
            <input type='email' placeholder='Confirm Email Address' id='confirmemail' required className={`${style.input} w-100 ps-3`}/>
          </div>
        </div>
        <div class="row .g-3 my-4">
          <div class="col">
            <label htmlFor="firstname" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Select Account Type</label>
            <div>
              <select id='firstname'style={{
                border: '1px solid #4285F4',
                background: 'transparent',
                borderRadius: '9px',
                padding: '.8rem',
                width: '100%'
              }}>
                <option value="">Select an Account type</option>
              </select>
            </div>
          </div>
          <div class="col">
            <label htmlFor="firstname" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>How did you hear about us?</label>
            <div>
              <select id='firstname'style={{
                border: '1px solid #4285F4',
                background: 'transparent',
                borderRadius: '9px',
                padding: '.8rem',
                width: '100%'
              }}>
                <option value="">Choose</option>
              </select>
            </div>
          </div>
        </div>
        <div class="">
          <label htmlFor="firstname" style={{fontSize: '13px', fontWeight: '500', margin: '0 0 8px'}}>Enter your Referral code</label>
          <input type="text" class="form-control" id='firstname' placeholder="Referral code (Optional)" style={{
            border: '1px solid #4285F4',
            borderRadius: '9px',
            padding: '.8rem'
          }}/>
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
            <input type='password' placeholder='Password' required id='password' className={`${style.input} w-100 ps-3`}/>
          </div>
        </div>
        {/* <p className={`${style.forgotpasswordlink} float-end p-2`}>Forgot Password ?</p> */}
        <div>
          <button type='submit' className={`${style.submit} btn btn-lg w-100`}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Register