import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import style from "../styles/sidebar.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${style.head}`}>
        <Header />
      </div>
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <div className="row" style={{ marginTop: "128px" }}>
          <div className={`${style.conntainer} col-lg-2 position-fixed`}>
            <Sidebar />
          </div>
          <div className="col-lg-12 .offset-lg-2">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
