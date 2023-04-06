import React from 'react'
import Image from 'next/image'
import style from '../../styles/overlays/Interactfhistory.module.css'

const Interactfhistory = () => {
  return (
    <div>
      <div className='text-center py-5'>
        <Image src={"/fundingoptions/Interac.png"} className='rounded-circle' width={60} height={60} alt='img'/>
      </div>
    </div>
    )
}

export default Interactfhistory
