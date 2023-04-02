import React from 'react'
import Link from 'next/link'
import style from '../../styles/main.module.css'
import Image from 'next/image'

const Card2 = () => {
  return (
    <div>
      <div className='cards'>
        <div className="row">
          <Link href={"/"} className={`${style.card_container} col my-2`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country2.png"} width={30} height={20}/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Canadian Dollar</p>
          </Link>
          <Link href={"/"} className={`${style.card_container} col my-2`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20}/>
              <p className='px-2'>Balance</p>
            </div>
            <div className="balance">
              <h4 className={`${style.balance}`}>4,509,063</h4>
            </div>
            <p className={`${style.cardnumber}`}>Nigerian Naira</p>
          </Link>
          <Link href={"/"} className={`${style.card_container} col my-2`}>
            <div className={`${style.currency}`}>
              <Image src={"/sidebaricons/country1.png"} width={30} height={20}/>
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

export default Card2