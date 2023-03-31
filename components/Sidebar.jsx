import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/sidebar.module.css'

const Sidebar = () => {
  return (
    <div className='sidebar mx-0 px-0'>
      <div className="container-fluid mx-0 px-0">
        <div className="sidebar_container">
          <ul>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={17} width={20} className={`me-3`}/>
              Home              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={17} width={20} className={`me-3`}/>
              Product & Services              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={17} width={20} className={`me-3`}/>
              Transactions              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={17} width={20} className={`me-3`}/>
              Customers              
            </li>
            <li className={`${styles.list} m-auto`}>
              <Image src={"/sidebaricons/Vector.png"} height={17} width={20} className={`me-3`}/>
              Invoice              
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar