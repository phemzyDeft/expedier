import React from 'react'
import Link from 'next/link'
import style from '../../styles/main.module.css'
import Image from 'next/image'

const Cards = () => {
  return (
    <div className='container'>
      <div className='cards' style={{margin: '2rem 0'}}>
        <div className="row gap-3">
          <Link href={"/account"} className={`${style.card_container} col-md col-12`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country2.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Canadian Dollar</p>
          </Link>
          <Link href={"/account"} className={`${style.card_container} col-md col-12`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Nigerian Naira</p>
          </Link>
          <Link href={"/account"} className={`${style.card_container} col-md col-12`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20} alt='img'/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>US Dollars</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cards