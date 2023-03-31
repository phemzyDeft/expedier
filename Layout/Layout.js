import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10 .bg-secondary">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout