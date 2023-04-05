import React from "react";
import Image from "next/image";
import style from "../styles/Auth.module.css";
import { ImCancelCircle } from "react-icons/im";
import Forgetpassword from "@/components/forms/Forgetpassword";
// import Register from "@/components/forms/Register";

const forgotpassword = () => {
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
        <Forgetpassword />
      </div>
      <div className="w-50 d-flex ms-5 ps-5 mt-5">
      </div>
    </div>
  );
};

export default forgotpassword;
