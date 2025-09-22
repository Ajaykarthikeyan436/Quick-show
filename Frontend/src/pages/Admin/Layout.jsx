import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/Admin/AdminSidebar'

const Layout = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <div className='flex'>
          <AdminSidebar />
          <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
