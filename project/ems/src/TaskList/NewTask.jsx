import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-[90%] w-[300px] bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-white/20 backdrop-blur-sm px-4 py-1.5 text-white font-medium rounded-lg text-sm'>
          {data.category}
        </h3>
        <h4 className='text-white/90 font-semibold text-sm'>{data.date}</h4>
      </div>
      <h2 className='text-white font-bold mt-4 text-xl leading-tight'>{data.title}</h2>
      <p className='text-white/80 text-sm mt-3 font-medium leading-relaxed'>{data.description}</p>
      <div className='mt-6'>
        <button className='w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 border border-white/10'>
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
