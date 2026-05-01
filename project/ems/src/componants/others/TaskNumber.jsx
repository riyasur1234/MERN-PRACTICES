import React from 'react'

const TaskNumber = ({ data }) => {
  // Calculate dynamic counts from data.tasks
  const newTaskCount = data?.tasks?.filter(task => task.newTask).length || 0
  const completedTaskCount = data?.tasks?.filter(task => task.completed).length || 0
  const acceptedTaskCount = data?.tasks?.filter(task => task.active).length || 0
  const failedTaskCount = data?.tasks?.filter(task => task.failed).length || 0

  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className='flex-1 py-6 px-6 rounded-xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50'>
        <h2 className='text-4xl font-bold text-white mb-2'>{newTaskCount}</h2>
        <h3 className='text-lg font-medium text-white/90'>New Task</h3>
      </div>
      <div className='flex-1 py-6 px-6 rounded-xl bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50'>
        <h2 className='text-4xl font-bold text-white mb-2'>{completedTaskCount}</h2>
        <h3 className='text-lg font-medium text-white/90'>Completed</h3>
      </div>
      <div className='flex-1 py-6 px-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50'>
        <h2 className='text-4xl font-bold text-white mb-2'>{acceptedTaskCount}</h2>
        <h3 className='text-lg font-medium text-white/90'>Active</h3>
      </div>
      <div className='flex-1 py-6 px-6 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50'>
        <h2 className='text-4xl font-bold text-white mb-2'>{failedTaskCount}</h2>
        <h3 className='text-lg font-medium text-white/90'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskNumber
