import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-8 overflow-y-auto'>
      <div className='max-w-7xl mx-auto'>
        <Header data={{ firstname: 'Admin' }} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
