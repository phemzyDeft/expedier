import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/sidebar.module.css'
import {HiViewGrid} from 'react-icons/hi'
import {FaTelegramPlane} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {IoCardOutline} from 'react-icons/io5'
import {HiUsers} from 'react-icons/hi'
import {TfiMoreAlt} from 'react-icons/tfi'
import {CgLogOff} from 'react-icons/cg'

const Sidebar = () => {
  return (
    <div className='sidebar_menu mx-0 px-0 py-4'>
      <div className="container mx-0 px-0">
        <div className="sidebar_container">
          <ul className=''>
            <li className={`${styles.list} m-auto`}>
              {/* <Image src={"/sidebaricons/Vector.png"} height={15} width={15} className={`me-3`} alt="img"/> */}
              <HiViewGrid style={{marginRight: '7px'}} size={20}/>
              Home
            </li>
            <li className={`${styles.list} m-auto`}>
              <FaTelegramPlane style={{marginRight: '7px'}} size={20}/>
              Product & Services              
            </li>
            <li className={`${styles.list} m-auto`}>
              <FiUsers style={{marginRight: '7px'}} size={20}/>
              Transactions              
            </li>
            <li className={`${styles.list} m-auto`}>
              <FiUsers style={{marginRight: '7px'}} size={20}/>
              Customers              
            </li>
            <li className={`${styles.list} m-auto`}>
              <HiUsers style={{marginRight: '7px'}} size={20}/>
              Invoice              
            </li>
            <li className={`${styles.list} m-auto`}>
              <HiUsers style={{marginRight: '7px'}} size={20}/>
              Bills              
            </li>
            <li className={`${styles.list} m-auto`}>
              <HiUsers style={{marginRight: '7px'}} size={20}/>
              Payment Links               
            </li>
            <li className={`${styles.list} m-auto`}>
              <IoCardOutline style={{marginRight: '7px'}} size={20}/>
              Cards              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/account.png"} height={15} width={15} className={`me-3`} alt="img"/>
              My Account              
            </li>
            <li className={`${styles.list} m-auto`}>
              <TfiMoreAlt style={{marginRight: '7px'}} size={20}/>
              More
            </li>
            <li className={`${styles.list} m-auto`}>
              <CgLogOff style={{marginRight: '7px', color: '#F56A6F'}} size={20}/>
              Logout
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar