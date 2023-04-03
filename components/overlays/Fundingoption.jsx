import React, { useState } from 'react'
import style from '../../styles/overlays/Fundingoptions.module.css'
import Image from 'next/image'
import Interactransferoption from './Interactransferoption';

const Fundingoption = () => {

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
      <div className='text-center py-1'>
        <Image src={"/sidebaricons/country2.png"} className='rounded-3' width={85} height={50} alt='img'/>
      </div>
      <div className={`${style.fundcard} col my-3`} onClick={handleSidebarOpen}>
        <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <Image src={"/fundingoptions/verified.png"} width={15} height={15} alt='img'/>
            <span className={`${style.heading}`}>Interac Transfer</span>
          </div>
          <div>
            <Image src={"/fundingoptions/>icon.png"} width={10} height={10} alt='img'/>
          </div>
        </div>
        <p className={`${style.ptext}`}>Pay using interac email transfers. Transaction fulfilled in less than 24 hours. Funds should arrrive by Tue, November 23, 2021</p>
        <Image src={"/fundingoptions/Interac.png"} width={20} height={20} alt='img'/>
      </div>

      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
        <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{padding: '.5rem 2rem'}}>
          <p style={{textAlign: 'center', letterSpacing: '-0.165px', color: 'black', padding: '1rem 0 0'}}>Interac Transfer</p>
          <Interactransferoption />
        </div>
      </div>

      <div className={`${style.fundcard} col my-3`}>
        <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <Image src={"/fundingoptions/verified.png"} width={15} height={15} alt='img'/>
            <span className={`${style.heading}`}>Debit / Card Card</span>
          </div>
          <div>
            <Image src={"/fundingoptions/>icon.png"} width={10} height={10} alt='img'/>
          </div>
        </div>
        <p className={`${style.ptext}`}>Pay using Debit or Credit Card. Transaction fulfilled in minutes!Your Card details are not saved and transaction is safe. </p>
        <Image src={"/fundingoptions/master.png"} width={27} height={18} alt='img' className='me-2'/>
        <Image src={"/fundingoptions/visa.png"} width={41} height={13} alt='img' className='me-2'/>
        <Image src={"/fundingoptions/stripe.png"} width={40} height={17} alt='img' className='me-2'/>
      </div>

      <div className={`${style.fundcard} col my-3`}>
        <div className="d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <Image src={"/fundingoptions/verified.png"} width={15} height={15} alt='img'/>
            <span className={`${style.heading}`}>Transfer between my accounts</span>
          </div>
          <div>
            <Image src={"/fundingoptions/>icon.png"} width={10} height={10} alt='img'/>
          </div>
        </div>
        <p className={`${style.ptext}`}>Send from your Account on Expedier. Transfer fulfilled instantly Funds should arrive by Fri. Nov. 8, 2022</p>
        <Image src={"/images/expedier_logo.svg"} width={80} height={27} alt='img'/>
      </div>

    </div>
  )
}

export default Fundingoption