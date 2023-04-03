import React from 'react'
import Image from 'next/image'
import style from '../../styles/overlays/Interactransferoptions.module.css'

const Interactransferoption = () => {
  return (
    <div>
      <div className='text-center py-1'>
        <Image src={"/fundingoptions/Interac.png"} className='rounded-circle' width={60} height={60} alt='img'/>
      </div>
      <p style={{color: 'black', fontSize: '.8rem', fontWeight: '600', marginTop: '3rem', fontFamily: 'DM Sans'}}>Send Funds via Interac to</p>
      <form action="">
        <div className={`${style.intinv}`}>
          <span>transfers@expedier.co</span>
          <Image src={"/fundingoptions/copy.png"} width={18} height={18} alt='img' style={{cursor: 'pointer'}}/>
        </div>

        <input type="text" placeholder='Add Coupon (optional)' className={`${style.intinv} w-100`}/>
        <input type="text" placeholder='Interac reference (optional)' className={`${style.intinv} w-100`} />
      </form>
      <div className='d-flex'>
        <Image src={"/fundingoptions/caution.png"} width={20} height={20}/>
        <span style={{color: 'rgba(0, 0, 0, 0.42)', fontSize: '.7rem'}}>Your payment is completed within 15-20 minutes after we confirm your funds. For support please email: Support@Expedier.co</span>
      </div>
      <div className='d-grid'>
        <button className={`${style.btn} btn btn-lg`}>I’ve sent the money</button>
        <button className={`${style.btn2} btn btn-lg`}>I’ve sent the money</button>
      </div>
    </div>
  )
}

export default Interactransferoption