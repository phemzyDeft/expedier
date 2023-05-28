import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";
import style from "../styles/sidebar.module.css";
import { useRouter } from "next/router";
import Accountverification from "@/components/Accountverification";

const Layout = ({ children }) => {
  const router = useRouter();
  const authScreen =
    router.pathname === "/login" ||
    router.pathname === "/register" ||
    router.pathname === "/forgotpassword" ||
    router.pathname === "/test" ||
    router.pathname === "/selectaccount";

  return (
    <>
      {!authScreen && (
        <div className={`${style.head}`}>
          <Header />
        </div>
      )}
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <div className="row">
          {!authScreen && (
            <div
              className={`${style.container} d-none d-lg-inline col-lg-2 position-fixed`}
            >
              <Sidebar />
            </div>
          )}
          <div className={`col-lg-10 col-12 offset-0 offset-lg-2`}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
