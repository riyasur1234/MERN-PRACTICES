import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-[90%] w-[300px] bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-white/20 backdrop-blur-sm px-4 py-1.5 text-white font-medium rounded-lg text-sm'>
          {data.category}
        </h3>
        <h4 className='text-white/90 font-semibold text-sm'>{data.date}</h4>
      </div>
      <h2 className='text-white font-bold mt-4 text-xl leading-tight'>{data.title}</h2>
      <p className='text-white/80 text-sm mt-3 font-medium leading-relaxed'>{data.description}</p>
      <div className='flex gap-2 mt-6'>
        <button className='flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2.5 px-3 rounded-xl transition-all duration-300 border border-white/10 text-sm'>
          Complete
        </button>
        <button className='flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-2.5 px-3 rounded-xl transition-all duration-300 border border-white/10 text-sm'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
