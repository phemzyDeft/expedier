import React from 'react'
import Image from 'next/image'
import style from '../styles/header.module.css'


const Header = () => {
  return (
    <div className='header'>
      <div className="container-fluid">
        <div className="navbar-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Image src="/images/expedier_logo.svg" width={150} height={100}/>
          </div>
          <div className="middle">
            <div className="container-search d-flex border px-5 py-2 rounded-pill">
              <div className="search_btn me-5">
                <Image src={"/sidebaricons/icon.png"} width={10} height={10}/>
              </div>
              <input placeholder='Search Transactions,  Id, Names, Account Number' className={`${style.search_bar}`}/>
            </div>
          </div>
          <div className="end">
            <div className="notification_container d-flex align-items-center">
              <Image src={"/sidebaricons/inactive.png"} width={30} height={30}/>
              <div className='rounded-cricle bg-primary w-25 h-25 .text-center rounded-circle justify-content-center align-items-center d-flex'>
                <p>CV</p>
              </div>
              <p>canada vendor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header