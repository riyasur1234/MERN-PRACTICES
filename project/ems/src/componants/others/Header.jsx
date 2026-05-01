import React from 'react'

const Header = ({ data }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    <div className='flex items-center justify-between mb-8'>
      <div>
        <h1 className='text-gray-400 text-lg font-medium'>
          Hello <br />
          <span className='text-white text-3xl font-bold'>
            {data?.firstname || 'User'} 👋
          </span>
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className='px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
