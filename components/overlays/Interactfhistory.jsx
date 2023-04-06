import React from 'react'
import Image from 'next/image'
import style from '../../styles/overlays/Interactfhistory.module.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const Interactfhistory = () => {
  return (
    <div>
      <div className={`${style.searchintname}`}>
        <input type='email' className={`${style.searchintname} form-control`} placeholder='Search by name'/>
      </div>
      <div className={`${style.userflex}`}>
        <div className={`${style.user}`}>
          <span style={{fontWeight: '600'}}>OD</span>
        </div>
        <div className={`${style.username}`}>
          <h6 style={{  color: '#474747', fontSize: '13px'}}>Oluwatobi Feyisara</h6>
          <p style={{color: '#BCBCBC', fontSize: '12px'}}>Feyisara@gmail.com</p>
        </div>
      </div>
      <div className={`${style.userflex}`}>
        <div className={`${style.user}`}>
          <span style={{fontWeight: '600'}}>OD</span>
        </div>
        <div className={`${style.username}`}>
          <h6 style={{  color: '#474747', fontSize: '13px'}}>Oluwatobi Feyisara</h6>
          <p style={{color: '#BCBCBC', fontSize: '12px'}}>Feyisara@gmail.com</p>
        </div>
      </div>
      <div className={`${style.userflex}`}>
        <div className={`${style.user}`}>
          <span style={{fontWeight: '600'}}>OD</span>
        </div>
        <div className={`${style.username}`}>
          <h6 style={{  color: '#474747', fontSize: '13px'}}>Oluwatobi Feyisara</h6>
          <p style={{color: '#BCBCBC', fontSize: '12px'}}>Feyisara@gmail.com</p>
        </div>
      </div>
      <div className={`${style.addnew}`}>
        <div style={{color: 'rgba(0, 0, 0, 0.65)', fontSize: '12px', marginRight: '5px'}}>Add a new Interac</div>
        <div className={`${style.addnewicon}`}>
          <AiOutlinePlusCircle size={30}/>
        </div>
      </div>
    </div>
    )
}

export default Interactfhistory
