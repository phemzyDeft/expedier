import React from 'react'
import Image from 'next/image'
import style from '../styles/header.module.css'
import Link from 'next/link'
import {CgMenuRight} from 'react-icons/cg'


const Header = () => {
  return (
    <div className={`${style.header}`}>
      <div className="container-fluid">
        <div className="row .navbar-container d-flex align-items-center justify-content-between">
          <Link href="/" className="logo col-2">
            <Image src="/images/expedier_logo.svg" width={150} height={100} alt='img'/>
          </Link>
          {/* <div className='float-right d-block d-lg-none'>
            <CgMenuRight size={20}/>
          </div> */}
          <div className='col-10 d-flex justify-content-between d-none d-lg-flex'>
            <div className="middle w-50 .col-8">
              <div className="container_search w-100 d-flex border px-4 py-2 rounded-pill">
                <div className="search_btn me-3">
                  <Link href={"/"}>
                    <Image src={"/sidebaricons/icon.png"} width={10} height={10} alt='img'/>
                  </Link>
                </div>
                <input placeholder='Search Transactions,  Id, Names, Account Number' className={`${style.search_bar} w-100`}/>
              </div>
            </div>
            <div className="end .col-2 mx-5">
              <div className="notification_container d-flex align-items-center justify-content-center .text-center">
                <p href={"/"} className={`${style.notify}`}><Image src={"/sidebaricons/inactive.png"} height={19} width={19} alt='img'/></p>
                <p href={"/"} className={`${style.notification} mx-3`}>CV</p>
                <p href={"/"} style={{color: 'black'}}>canada vendor</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header