import React, { useState } from 'react'
import Link from 'next/link'
import style from '../../styles/main.module.css'
import Image from 'next/image'
import Fundingoption from '../overlays/Fundingoption'

const Card2 = () => {

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
      <div className='cards'>
        <div className="row">
          <div className={`${style.card_container} col my-2`} onClick={handleSidebarOpen}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country2.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Canadian Dollar</p>
          </div>

          <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
            <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{padding: '.5rem 2rem'}}>
              <p style={{textAlign: 'center', letterSpacing: '-0.165px', color: 'black', padding: '1rem 0 0'}}>Funding Option</p>
              <Fundingoption />
            </div>
          </div>

          <div className={`${style.card_container} col my-2`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Nigerian Naira</p>
          </div>
          <div className={`${style.card_container} col my-2`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>US Dollars</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card2