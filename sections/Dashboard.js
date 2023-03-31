import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 .bg-secondary">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
