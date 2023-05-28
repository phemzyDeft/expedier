import React, { useState } from 'react'
import Image from 'next/image'
import style from '../../styles/overlays/Interactransferoptions.module.css'
import Verifyemail from './Verifyemail';
import {IoCopyOutline} from 'react-icons/io5'

const Interactransferoption = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsOpen(true);
  };

  const handleSidebarClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('sidebar-overlay')) {
      handleSidebarClose();
    }
  };

  const username = `transfers@expedier.co`

  return (
    <div>
      <div className='text-center py-1'>
        <Image src={"/fundingoptions/Interac.png"} className='rounded-circle' width={60} height={60} alt='img'/>
      </div>
      
      
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{padding: '.5rem 2rem'}}>
          <p style={{textAlign: 'center', letterSpacing: '-0.165px', color: 'black', padding: '1rem 0 0'}}>Register your <br /> Interac Email First</p>
          <Verifyemail />
        </div>
      </div>


      <p style={{color: 'black', fontSize: '.8rem', fontWeight: '600', marginTop: '3rem', fontFamily: 'DM Sans'}}>Send Funds via Interac to</p>
      <form action="">
        <div className={`${style.intinv}`}>
          <span>{username}</span>
          {username ? <IoCopyOutline style={{cursor: 'pointer'}} onClick={()=>{
            navigator.clipboard.writeText(username);
          }}/> : <IoCheckmarkDoneOutline style={{cursor: 'pointer'}}/>}
        </div>

        <input type="text" placeholder='Add Coupon (optional)' className={`${style.intinv} w-100`}/>
        <input type="text" placeholder='Interac reference (optional)' className={`${style.intinv} w-100`} />
      </form>
      <div className='d-flex'>
        <Image src={"/fundingoptions/caution.png"} width={20} height={20} alt='img'/>
        <span style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: '.7rem'}}>Your payment is completed within 15-20 minutes after we confirm your funds. For support please email: Support@Expedier.co</span>
      </div>
      <div className='d-grid'>
        <button className={`${style.btn} btn btn-lg`}>I’ve sent the money</button>
        <button className={`${style.btn2} btn btn-lg`} onClick={handleSidebarOpen}>Register another Interac email</button>
      </div>
    </div>
  )
}

export default Interactransferoption