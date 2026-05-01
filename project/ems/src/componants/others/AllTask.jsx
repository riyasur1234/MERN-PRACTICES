import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  return (
    <div className='bg-gray-800/50 backdrop-blur-sm p-6 mt-6 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden'>
      <h2 className='text-xl font-bold text-white mb-4'>All Employees Tasks</h2>

      {/* HEADER */}
      <div className='bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 py-4 px-6 flex justify-between mb-3 rounded-xl'>
        <h2 className='text-white font-semibold w-1/5'>Employee Name</h2>
        <h3 className='text-white font-semibold w-1/5 text-center'>New Task</h3>
        <h5 className='text-white font-semibold w-1/5 text-center'>Active Task</h5>
        <h5 className='text-white font-semibold w-1/5 text-center'>Completed</h5>
        <h5 className='text-white font-semibold w-1/5 text-center'>Failed</h5>
      </div>

      {/* LIST */}
      <div className='h-[300px] overflow-y-auto pr-2 space-y-2'>
        {authData.employees.map((elem) => {
          const newCount = elem.tasks.filter(t => t.newTask).length
          const activeCount = elem.tasks.filter(t => t.active).length
          const completedCount = elem.tasks.filter(t => t.completed).length
          const failedCount = elem.tasks.filter(t => t.failed).length

          return (
            <div
              key={elem.id || elem.email}
              className='bg-gray-900/50 border border-gray-700/50 py-4 px-6 flex justify-between rounded-xl hover:bg-gray-900/70 transition-all duration-300'
            >
              <h2 className='font-semibold w-1/5 text-white'>{elem.firstname}</h2>
              <h3 className='text-yellow-400 font-semibold w-1/5 text-center'>{newCount}</h3>
              <h5 className='text-blue-400 font-semibold w-1/5 text-center'>{activeCount}</h5>
              <h5 className='text-green-400 font-semibold w-1/5 text-center'>{completedCount}</h5>
              <h5 className='text-red-400 font-semibold w-1/5 text-center'>{failedCount}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask
