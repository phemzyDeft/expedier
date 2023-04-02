import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/account.module.css'
import Table from './Table'

const Accountverification = () => {
  return (
    <div className={`${style.account}`}>
      <div className="container">
        <div className="back d-flex .align-items-center m-auto pt-3">
          <Link href={"/"} className="me-3"><span></span>Back</Link>
          <h4 style={{fontSize: "1rem"}}>CAD Account</h4>
        </div>

          <div className={`${style.acc_details}`}>
            <Image src={"/sidebaricons/country1.png"} height={50} width={50} alt='img'/>
            <p className={`${style.balance}`}>Balance: $0.00</p>
          </div>
          <div className='icon_container d-flex justify-content-center py-5'>

            <div className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <Image src={"/sidebaricons/bill 1.png"} width={18} height={18} alt='img'/>
              </div>
              <p>Pay a Bill</p>
            </div>
            <div className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <Image src={"/sidebaricons/bill 1.png"} width={18} height={18} alt='img'/>
              </div>
              <p>Pay a Bill</p>
            </div>
            <div className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <Image src={"/sidebaricons/bill 1.png"} width={18} height={18} alt='img'/>
              </div>
              <p>Pay a Bill</p>
            </div>
            <div className={`${style.icon_wrapper}`}>
              <div className={`${style.icon_box}`}>
                <Image src={"/sidebaricons/bill 1.png"} width={18} height={18} alt='img'/>
              </div>
              <p>Pay a Bill</p>
            </div>
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