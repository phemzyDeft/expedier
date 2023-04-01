import React from 'react'
import Image from 'next/image'
import style from '../styles/main.module.css'
import Link from 'next/link'
import Table from './Table'

const Main = () => {
  return (
    <div className='main py-4' style={{background: "#EDF3FF", marginLeft: '250px'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className={`main_container`}>
              <div className="head d-flex mb-2 align-items-center justify-content-between">
                <div className={`${style.title}`}>
                  <h3 className={`${style.dashboard_text}`}>Dashboard</h3>
                  <p className={`${style.sub_title}`}>Realtime Insight on various activities</p>
                </div>
                <div className={`${style.fundwallet}`}>
                  <button className='btn .btn-primary' style={{background: "#007BFF", borderRadius: '3px', color: 'white', padding: "10px"}}>
                    <Image src={"/sidebaricons/fw_btn.png"} width={20} height={20} />
                    <span className='fw-bold ps-2'>FUND WALLET</span>
                  </button>
                </div>
              </div>
              <div className={`${style.card} card_box px-4 py-3 text-white`}>
                <div className="acc_details">
                  <p className={`${style.card_box_title}`}>Total Business Account Balance</p>
                  <h3 className={`${style.card_box_balance}`}>$5790.00 <span><Image src={"/sidebaricons/shape.png"} width={15} height={15}/></span></h3>
                  <h3 className={`${style.card_box_balance}`}>5355   0348   ****  **** </h3>
                  <p className={`${style.card_box_user_name}`}>John Doe (John4483)</p>
                </div>
                <div className={`${style.mycard}`}>
                  <div className={style.mycard_img}>
                    <Image src={"/sidebaricons/expedier_card_logo.png"} height={50} width={50} className={`${style.mycardimg}`}/>
                  </div>
                  <div className={`${style.validcard}`}>
                    <p className={`${style.cardnumber}`}>VALID <br /> CARD</p>
                    <p className={`${style.cardnumber}`}>06 / 23</p>
                  </div>
                </div>
              </div>
              <div className='cards py-3'>
                <div className="row">
                  <Link href={"/account"} className={`${style.card_container} col`}>
                    <div className={`${style.currency}`}>
                      <Image src={"/sidebaricons/country2.png"} width={30} height={20}/>
                      <p className='px-2'>Balance</p>
                    </div>
                    <div className="balance">
                      <h4 className={`${style.balance}`}>4,509,063</h4>
                    </div>
                    <p className={`${style.cardnumber}`}>Canadian Dollar</p>
                  </Link>
                  <Link href={"/account"} className={`${style.card_container} col`}>
                    <div className={`${style.currency}`}>
                      <Image src={"/sidebaricons/country1.png"} width={30} height={20}/>
                      <p className='px-2'>Balance</p>
                    </div>
                    <div className="balance">
                      <h4 className={`${style.balance}`}>4,509,063</h4>
                    </div>
                    <p className={`${style.cardnumber}`}>Nigerian Naira</p>
                  </Link>
                  <Link href={"/account"} className={`${style.card_container} col`}>
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
              <div className={`d-flex align-items-end justify-content-end`}>
                <select name="" id="" className={`${style.filter_btn} px-5 py-2`}>
                {/* <Image src={"/sidebaricons/calendar.png"} width={30} height={30}/> */}
                  <option value="Monthly" >Monthly</option>
                </select>
              </div>
              <Table />
            </div>
          </div>
          <div className='col-lg-4 col-12'>
            <p>Business Card</p>
            <div className={`${style.creditcard_container}`}>
              <div className='d-flex justify-content-between align-items-center my-auto'>
                <p>credit card</p>
                <Image className={`${style.creditcard_logo}`} src={"/images/expedier_logo.svg"} width={100} height={20}/>
              </div>
              <p>1234 5678 9101 1121</p>
              <div className='d-flex align-items-center justify-content-between'>
                <p>John Doe</p>
                <p>06/21</p>
              </div>
            </div>`
            <div className='s%r d-flex justify-content-evenly pt-3'>
              <div className={`${style.sendmoney_container}`}>
                <Image src={"/sidebaricons/money-send.png"} width={30} height={30}/>
                <p>Send Money</p>
              </div>
              <div className={`${style.receivemoney_container}`}>
                <Image src={"/sidebaricons/money-recive.png"} width={30} height={30}/>
                <p>Send Money</p>
              </div>
            </div>
            <div className='d-flex justify-content-between py-3'>
              <p>Employees</p>
              <p>SEE ALL</p>
            </div>
            <div>
              <div className="container d-flex justify-content-between">
                <div className={style.avatar1}>
                  <Image src={"/sidebaricons/Path.png"} width={30} height={30} />
                </div>
                <div className={style.avatar1}>
                  <Image src={"/sidebaricons/Path.png"} width={30} height={30} />
                </div>
                <div className={style.avatar1}>
                  <Image src={"/sidebaricons/Path.png"} width={30} height={30} />
                </div>  
                <div className={style.avatar1}>
                  <Image src={"/sidebaricons/Path.png"} width={30} height={30} />
                </div>
                <div className={style.avatar1}>
                  <Image src={"/sidebaricons/Path.png"} width={30} height={30} />
                </div>             
              </div>
            </div>
            <div className={style.invite}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main