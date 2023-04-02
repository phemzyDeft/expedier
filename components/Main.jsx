import React, { useState } from 'react'
import Image from 'next/image'
import style from '../styles/main.module.css'
import Link from 'next/link'
import Table from './Table'
import {MdCopyAll} from 'react-icons/md'
import Selectacctofund from './overlays/Selectacctofund'
import Cards from './cards/Card1'

const Main = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarOpen = () => {
    setIsOpen(true);
  };

  const handleSidebarClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('sidebar-overlay')) {
      handleSidebarClose();
    }
  };

  return (
    <div className='main py-4 px-3' style={{background: "#EDF3FF", marginLeft: '225px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">
            <div className={`main_container`}>
              <div className="head d-flex mb-2 align-items-center justify-content-between">
                <div className={`${style.title}`}>
                  <h3 className={`${style.dashboard_text}`}>Dashboard</h3>
                  <p className={`${style.sub_title}`}>Realtime Insight on various activities</p>
                </div>
                <div className={`${style.fundwallet}`}>
                  <button className='btn .btn-primary btn-sm' style={{background: "#007BFF", borderRadius: '3px', color: 'white', padding: "10px"}} onClick={handleSidebarOpen}>
                    <Image src={"/sidebaricons/fw_btn.png"} width={20} height={20} />
                    <span className='fw-bold ps-2'>FUND WALLET</span>
                  </button>

                  <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
                    <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{padding: '.5rem 2rem'}}>
                      <p style={{textAlign: 'center', letterSpacing: '-0.165px', color: '#007BFF', padding: '1rem 0 0'}}>Select Account to Fund</p>
                      <Selectacctofund />
                      <button className='btn btn-lg w-100 my-4' onClick={handleSidebarClose} style={{background: '#C8D7FF', borderRadius: '6px', fontSize: '.8rem', fontWeight: '600'}}>Cancel</button>
                    </div>
                  </div>

                </div>
              </div>
              <div className={`${style.card} card_box px-4 py-3 text-white`}>
                <div className="acc_details">
                  <p className={`${style.card_box_title}`}>Total Business Account Balance</p>
                  <h3 className={`${style.card_box_balance}`}>$5,790.00 <span style={{cursor: 'pointer'}}><Image src={"/sidebaricons/shape.png"} width={15} height={15}/></span></h3>
                  <h3 className={`${style.card_box_balance}`}>5355   0348   ****  **** </h3>
                  <p className={`${style.card_box_user_name}`}>John Doe (John4483)</p>
                </div>
                <div className={`${style.mycard}`}>
                  <Image src={"/sidebaricons/expedier_card.png"} height={60} width={52} />
                  <div className={`${style.validcard}`}>
                    <p className={`${style.cardnumber}`}>VALID <br /> CARD</p>
                    <p className={`${style.cardnumber}`}>06 / 23</p>
                  </div>
                </div>
              </div>
              <Cards />
              <div className={`d-flex align-items-end justify-content-end my-3`}>
                <select name="" id="" className={`${style.filter_btn} px-5 py-2`}>
                {/* <Image src={"/sidebaricons/calendar.png"} width={30} height={30}/> */}
                  <option value="Monthly" >Monthly</option>
                </select>
              </div>
              <Table />
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-12'>
            <p>Business Card</p>
            <div className={`${style.creditcard_container}`}>
              <div className='d-flex justify-content-between align-items-center my-auto pb-3'>
                <div>Credit card</div>
                <Image className={`${style.creditcard_logo}`} src={"/images/expedier_logo.svg"} width={100} height={20}/>
              </div>
              <p>1234 5678 9101 1121</p>
              <div className='d-flex align-items-center justify-content-between'>
                <p>John Doe</p>
                <p>06/21</p>
              </div>
            </div>`
            <div className='s%r d-flex justify-content-between'>
              <div className={`${style.sendmoney_container} w-50 me-4`}>
                <Image src={"/sidebaricons/money-send.png"} width={30} height={30} alt='img'/>
                <p>Send Money</p>
              </div>
              <div className={`${style.receivemoney_container} w-50`}>
                <Image src={"/sidebaricons/money-recive.png"} width={30} height={30} alt='img'/>
                <p>Receive Money</p>
              </div>
            </div>
            <div className='d-flex justify-content-between pt-4'>
              <p>Employees</p>
              <p style={{fontSize: "12px", color: "#007BFF", cursor: 'pointer' }}>SEE ALL</p>
            </div>
            <div className=".container d-flex justify-content-between pb-4">
              <div className={`${style.avatar1} d-flex align-items-center justify-content-center px-3`}>
                <Image src={"/sidebaricons/Path.png"} width={30} height={30}  alt='img'/>
              </div>
              <div className={`${style.avatar2} mx-1`}>
                <Image src={"/sidebaricons/avatar1.png"} width={50} height={50}  alt='img'/>
              </div>
              <div className={`${style.avatar2} mx-1`}>
                <Image src={"/sidebaricons/avatar2.png"} width={50} height={50}  alt='img'/>
              </div>  
              <div className={`${style.avatar2} mx-1`}>
                <Image src={"/sidebaricons/avatar3.png"} width={50} height={50}  alt='img'/>
              </div>
              <div className={`${style.avatar2}`}>
                <Image src={"/sidebaricons/avatar4.png"} width={50} height={50}  alt='img'/>
              </div>             
            </div>
            <div className={`${style.invite}`}>
              <h6>Invite a friend and get $15</h6>
              <p style={{fontSize: '14px', color: '#222222'}}>Give a friend promo code on Expedier and you&apos;ll get $15 immediately they Register.</p>
              <div>
                <div className={`${style.invite_username} m-auto d-flex justify-content-center align-items-center text-align-center mb-3`}>
                    <MdCopyAll /><span className='px-1'>JOHN 2315</span>
                </div>
                <div className={`${style.invite_usrname} m-auto d-flex justify-content-center align-items-center text-align-center`}>
                    <MdCopyAll /><span className='px-1 text-white'>Invite Friends</span>
                </div>
              </div>
            </div>
            <div className='s%r d-flex justify-content-between pt-3'>
              <div className={`${style.amountearn} w-50 h-25 me-4 text-white`}>
                <p style={{ color: '#DCF88E'}}>$350</p>
                <p>Amount Earned</p>
              </div>
              <div className={`${style.amountearn} w-50 h-25 text-white`}>
                <p>$350</p>
                <p>Amount Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main