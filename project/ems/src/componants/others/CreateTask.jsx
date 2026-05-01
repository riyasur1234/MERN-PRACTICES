import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const authData = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      alert('Please fill all fields')
      return
    }

    const newTaskObj = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const data = JSON.parse(localStorage.getItem('employees')) || []

    const updatedEmployees = data.map((emp) => {
      if (asignTo === emp.firstname) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTaskObj]
        }
      }
      return emp
    })

    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')

    alert('Task created successfully!')
  }

  return (
    <div>
      <div className='p-6 bg-gray-800/50 backdrop-blur-sm mt-6 rounded-2xl border border-gray-700/50 shadow-xl'>
        <h2 className='text-xl font-bold text-white mb-6'>Create New Task</h2>
        <form
          onSubmit={submitHandler}
          className='flex flex-wrap w-full items-start justify-between gap-6'
        >
          {/* LEFT SIDE */}
          <div className='w-full lg:w-1/2 space-y-5'>

            <div>
              <h3 className='text-sm text-gray-300 mb-2 font-medium'>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
                type="text"
                placeholder='Make a UI design'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-2 font-medium'>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
                type='date'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-2 font-medium'>Assign To</h3>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
                type="text"
                placeholder='Employee name (e.g., Arjun)'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-2 font-medium'>Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500'
                type="text"
                placeholder='Design, Dev, etc'
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className='w-full lg:w-1/2 flex flex-col items-start space-y-5'>
            <div className='w-full'>
              <h3 className='text-sm text-gray-300 mb-2 font-medium'>Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className='w-full px-4 py-3 text-white bg-gray-900/50 border border-gray-600 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 placeholder:text-gray-500 resize-none'
                cols="30"
                rows="8"
                placeholder='Task description...'
              ></textarea>
            </div>

            <button className='w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50'>
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTask;
