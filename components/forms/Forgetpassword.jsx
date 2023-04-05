import React from 'react'
import style from '../../styles/Auth.module.css'
import {FaEnvelope} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiShare} from 'react-icons/bi'
import Link from 'next/link'

const Forgetpassword = () => {
  return (
    <div className={`${style.registercontainer} py-5`}>
      <h2 className='mb-3'>Forget Password</h2>
      <p>Please select option to send link to reset password</p>
      <div className={`${style.resetviaemail}`}>
        <div className={`${style.resetviaemailicon}`} style={{backgroundColor: 'rgba(0, 123, 255, 0.7)', color: 'white'}}>
          <FaEnvelope />
        </div>
        <div>
          <h6 style={{color: '#007BFF', fontSize: '14px', fontWeight: '500'}}>Reset via Email</h6>
          <p style={{fontSize: '12px', color: '#C4C4C4'}}>We will send a link to reset your password</p>
          <input type="email" placeholder='Email Adress' className={`${style.resetviaemailinput} form-control`} />
        </div>
      </div>
      <div className={`${style.resetviaphone} my-3`}>
        <div className={`${style.resetviaemailicon}`} style={{backgroundColor: 'rgba(152, 160, 178, 0.2)', color: '#919499'}}>
          <BsFillTelephoneFill />
        </div>
        <div>
          <h6 style={{fontSize: '14px', fontWeight: '500'}}>Reset via Email</h6>
          <p style={{fontSize: '12px', color: '#C4C4C4'}}>We will send a link to reset your password</p>
        </div>
      </div>
      <div>
        <button type='submit' className={`${style.submit} btn btn-lg w-100`}>Send Link Reset Password</button>
      </div>
      <div style={{ margin: '1rem 0 0'}}>
        <Link href={"/login"} style={{color: '#C4C4C4'}}><BiShare /> &nbsp;Back to sign in</Link>
      </div>
    </div>
  )
}

export default Forgetpassword