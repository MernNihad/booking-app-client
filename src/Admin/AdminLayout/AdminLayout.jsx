import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './AdminLayout.css'
import AdminSideBar from '../AdminSidebar/AdminSideBar'
import './AdminLayout.css'

const AdminLayout = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("admin-token") && !localStorage.getItem("admin-id")){
      navigate('/adminlogin')
    }
  },[navigate])
  return (
    <div className='adlayout'>
        <AdminSideBar/>
         
          <div>
            <Outlet/>
        </div> 
        <div className='Image'>
          
        </div>
      
    </div>
  )
}

export default AdminLayout
