import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className='sidebar mx-0 px-0 py-4'>
      <div className="container mx-0 px-0">
        <div className="sidebar_container">
          <ul>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Home
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/product.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Product & Services              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/user.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Transactions              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/user.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Customers              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/invoice.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Invoice              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/invoice.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Bills              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/invoice.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Payment Links               
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/card.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Cards              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/account.png"} height={15} width={15} className={`me-3`} alt="img"/>
              My Account              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/more.png"} height={15} width={15} className={`me-3`} alt="img"/>
              More              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/logout.png"} height={15} width={15} className={`me-3`} alt="img"/>
              Logout              
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar