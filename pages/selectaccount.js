import React from "react";
import Image from "next/image";
import style from "../styles/Auth.module.css";
import { ImCancelCircle } from "react-icons/im";
import Forgetpassword from "@/components/forms/Forgetpassword";

const selectaccount = () => {
  return (
    <div className={`${style.auth}`}>
      <div
        style={{
          height: "50vh",
          backgroundImage: "url(../authimages/authbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "3rem",
        }}
      >
        <div>
          <Image
            src={"/images/expedier_logo.svg"}
            width={200}
            height={66}
            className="px-0 mx-0"
          />
        </div>
        <div className={`${style.auth_text}`}>
          <h3>Create Your Style</h3>
          <p style={{ fontSize: "16px", lineHeight: "26px" }}>
          An Expedier Brand is your unique brand idenity you can use to send or receive payment within the Expedier network
          </p>
        </div>
      </div>
      <div className={`${style.formcontainer}`}>
        {/* <Forgetpassword /> */}
      </div>
      <div className="w-50 d-flex ms-5 ps-5 mt-5">
        <div className={`${style.loginas}`} style={{background: 'transparent', marginRight: '0px'}}>
          <Image src={"/authimages/user1.png"} width={70} height={70} />
        </div>
        <div className={`${style.loginas}`} style={{background: 'transparent', marginRight: '0px'}}>
          <Image src={"/authimages/user2.png"} width={70} height={70} />
        </div>
        <div className={`${style.loginas}`} style={{background: 'transparent', marginRight: '0px'}}>
          <Image src={"/authimages/user3.png"} width={70} height={70} />
        </div>
        <div className={`${style.loginas}`} style={{background: 'transparent', marginRight: '0px'}}>
          <Image src={"/authimages/user4.png"} width={70} height={70} />
        </div>
        <div className={`${style.loginas}`} style={{background: 'transparent', marginRight: '0px'}}>
          <Image src={"/authimages/user5.png"} width={70} height={70} />
        </div>
      </div>
    </div>
  )
}

export default selectaccount