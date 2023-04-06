import React, { useState } from 'react'
import Image from 'next/image'
import style from '../../styles/overlays/Interactransferoptions.module.css'
import Interactfhistory from './Interactfhistory';

const Verifyemail = () => {

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
  return (
    <div>
      <div className='text-center py-5'>
        <Image src={"/fundingoptions/Interac.png"} className='rounded-circle' width={60} height={60} alt='img'/>
      </div>

      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{padding: '.5rem 2rem'}}>
          <p style={{textAlign: 'center', letterSpacing: '-0.165px', color: 'black', padding: '1rem 0 0'}}>Interac Transfer</p>
          <Interactfhistory />
        </div>
      </div>

      <p style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: '12px'}}>We noticed you have never used interac before on Expedier or you want to register a new interac email. Please kindly let us know which of your interac email to expect the funds.
Letting us know your email does not give us access to your interac or bank details but makes your transactions faster.</p>
      <label htmlFor='email' style={{color: 'black', fontSize: '12px', fontWeight: '500'}}>Email Address</label>
      <input type="email" id='email' placeholder='transfers@expedier.co' className={`${style.intinv} w-100`}/>
      <div className='d-grid' onClick={handleSidebarOpen}>
        <button className={`${style.btn} btn btn-lg`}>Register your email</button>
      </div>
    </div>
    )
}

export default Verifyemail