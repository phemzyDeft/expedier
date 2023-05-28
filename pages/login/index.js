import React from "react";
import Image from "next/image";
import Login from "@/components/forms/Login";
import style from "../../styles/Auth.module.css";
import { ImCancelCircle } from "react-icons/im";

const login = () => {
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
            alt="img"
          />
        </div>
        <div className={`${style.auth_text}`}>
          <h5>Lorem Ipsum</h5>
          <h3>Expedier Account</h3>
          <p style={{ fontSize: "16px", lineHeight: "26px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
      <div className={`${style.formcontainer}`}>
        <Login />
      </div>
      <div className="w-50 d-flex ms-5 ps-5 mt-5">
        <div className={`${style.loginas}`}>
          <Image src={"/authimages/loginas1.png"} width={70} height={70} />
          <div style={{ lineHeight: "1px", padding: "2px 0 0" }}>
            <h6>Segun Peters</h6>
            <p style={{ fontSize: "10px" }}>Active 5 mins ago</p>
          </div>
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
            }}
          >
            <ImCancelCircle size={12} />
          </span>
        </div>
        <div className={`${style.loginas}`}>
          <Image src={"/authimages/loginas2.png"} width={70} height={70} alt="img"/>
          <div style={{ lineHeight: "1px", padding: "2px 0 0" }}>
            <h6>James Isreal</h6>
            <p style={{ fontSize: "10px" }}>Active 4 days ago</p>
          </div>
          <span
            style={{
              position: "absolute",
              top: "2px",
              right: "10px",
              cursor: "pointer",
            }}
          >
            <ImCancelCircle size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default login;
