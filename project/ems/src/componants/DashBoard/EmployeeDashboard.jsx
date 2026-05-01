import React from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
  return (
    <div className='h-screen w-full p-8 overflow-y-auto'>
      <div className='max-w-7xl mx-auto'>
        <Header data={data} />
        <TaskNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
