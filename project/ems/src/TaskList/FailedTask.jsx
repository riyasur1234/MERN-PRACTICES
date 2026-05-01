import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-[90%] w-[300px] bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 shadow-xl shadow-gray-500/30 hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-white/20 backdrop-blur-sm px-4 py-1.5 text-white font-medium rounded-lg text-sm'>
          {data.category}
        </h3>
        <h4 className='text-white/90 font-semibold text-sm'>{data.date}</h4>
      </div>
      <h2 className='text-white font-bold mt-4 text-xl leading-tight'>{data.title}</h2>
      <p className='text-white/80 text-sm mt-3 font-medium leading-relaxed'>{data.description}</p>
      <div className='mt-6'>
        <button className='w-full bg-white/20 backdrop-blur-sm text-white font-semibold py-2.5 px-4 rounded-xl border border-white/10 cursor-default'>
          ✗ Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask
