import React from 'react'
import Image from 'next/image'
import style from '../styles/main.module.css'

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={`main_container`}>
              <div className="head d-flex mb-2 align-items-center justify-content-between">
                <div className={`${style.title}`}>
                  <h3>Dashboard</h3>
                  <p className={`${style.sub_title}`}>Realtime Insight on various activities</p>
                </div>
                <div className={`${style.fundwallet}`}>
                  <button className='btn btn-primary'>
                    <Image src={"/sidebaricons/fw_btn.png"} width={20} height={20} />
                    <span className='fw-bold ps-2'>FUND WALLET</span>
                  </button>
                </div>
              </div>
              <div className={`${style.card} card_box px-4 py-3 text-white`}>
                <div className="acc_details">
                  <p className={`${style.card_box_title}`}>Total Business Account Balance</p>
                  <h3 className={`${style.card_box_balance}`}>$5790.00 <span></span></h3>
                  <h3 className={`${style.card_box_balance}`}>5355   0348   ****  **** </h3>
                  <p className={`${style.card_box_user_name}`}>John Doe (John4483)</p>
                </div>
                <div className={`${style.mycard}`}>
                  <Image src={"/sidebaricons/expedier_card_logo.png"} height={80} width={60}/>
                  <div className={`${style.validcard}`}>
                    <p className={`${style.cardnumber}`}>VALID <br /> CARD</p>
                    <p className={`${style.cardnumber}`}>06 / 23</p>
                  </div>
                </div>
              </div>
              <div className='cards d-flex align-items-center justify-content-between py-3'>
                <div className="card">
                  <div className="currency"></div>
                  <div className="balance">
                    <p>4,509,063</p>
                  </div>
                  <p>Canadian Dollar</p>
                </div>
                <div className="card">
                  <div className="currency"></div>
                  <div className="balance">
                    <p>4,509,063</p>
                  </div>
                  <p>Canadian Dollar</p>
                </div>
                <div className="card">
                  <div className="currency"></div>
                  <div className="balance">
                    <p>4,509,063</p>
                  </div>
                  <p>Canadian Dollar</p>
                </div>
                
              </div>
              <div className="filter_btn">
                <button className='btn btn-primary'>Monthly</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main