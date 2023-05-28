import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/account.module.css'
import Table from './Table'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {BiPlus} from 'react-icons/bi'
import {IoSwapVertical} from 'react-icons/io5'
import {MdOutlineArrowOutward} from 'react-icons/md'
import {BsPhoneFlip} from 'react-icons/bs'

const Accountverification = () => {

  return (
    <div className={`${style.account}`}>
      <div className="container-fluid">
        <div className="back d-flex .align-items-center m-auto pt-3">
          <Link href={"/"} className="me-3" style={{fontSize: '14px'}}><MdOutlineKeyboardBackspace size={15}/>Back</Link>
          <h4 style={{fontSize: "1rem"}}>CAD Account</h4>
        </div>

          <div className={`${style.acc_details}`}>
            <Image src={"/sidebaricons/country1.png"} height={50} width={50} alt='img'/>
            <p className={`${style.balance}`}>Balance: $0.00</p>
          </div>
          <div className='icon_container d-flex justify-content-center py-4'>

            <Link href={"/"} className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <BiPlus />
              </div>
              <p className={`${style.ptag}`}>Fund<br />Account</p>
            </Link>
            <Link href={"/"} className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <IoSwapVertical />
              </div>
              <p className={`${style.ptag}`}>Swap<br />Funds</p>
            </Link>
            <Link href={"/"} className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <MdOutlineArrowOutward />
              </div>
              <p className={`${style.ptag}`}>Send<br />Locally</p>
            </Link>
            <Link href={"/"} className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <BsPhoneFlip />
              </div>
              <p className={`${style.ptag}`}>Account<br />Details</p>
            </Link>
          </div>


        <div className='d-flex align-items-center justify-content-between'>
          <p>USD Activity</p>
          <span><Image src={"/sidebaricons/icon.png"} width={10} height={10} alt='img'/></span>
        </div>
        <Table />
      </div>
    </div>
  )
}

export default Accountverification